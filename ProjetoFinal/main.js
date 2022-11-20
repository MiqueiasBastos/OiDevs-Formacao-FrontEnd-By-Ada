import Administrador from "./class/Administrador.class.js";
import Postagem from "./class/Postagem.class.js";
import Usuario from "./class/Usuario.class.js";

import "./populate.js";

import {
    formCadastro,
    formLogin,
    formPostagem,
    telaFeed,
    telaLogin,
    modalCadastro,
    headerSaudacao,
    listaAmigos,
    listaUsuarios,
    imagensPerfil,
    totalUsuarios,
    totalAmigos,
    listaPostagens,
    modalEditarPostagem,
    botaoSair,
} from "./elements.js";

let usuarioSessao;
let ehAdministrador;

formLogin.onsubmit = function (evento) {
    evento.preventDefault();
    const formulario = new FormData(this);
    const nomeUsuario = formulario.get("usuario");
    const senha = formulario.get("senha");

    try {
        usuarioSessao = Usuario.login(nomeUsuario, senha);
        ehAdministrador = usuarioSessao instanceof Administrador;
        this.reset();
        renderizarPaginaFeed();
        mudarTela("feed");
    } catch (error) {
        alert(error.message);
    }
};

formPostagem.onsubmit = function (evento) {
    evento.preventDefault();
    const formulario = new FormData(this);
    const descricao = formulario.get("descricao");

    try {
        new Postagem(descricao, usuarioSessao);
        this.reset();
        renderizarPaginaFeed();
    } catch (error) {
        alert(error.message);
    }
};

formCadastro.onsubmit = function (evento) {
    evento.preventDefault();
    const formulario = new FormData(this);

    const nomeCompleto = formulario.get("nome-completo");
    const usuario = formulario.get("usuario");
    const senha = formulario.get("senha");
    const usuarioGithub = formulario.get("usuario-github");

    usuarioSessao = new Usuario(nomeCompleto, usuario, senha, usuarioGithub);
    ehAdministrador = false;

    const modal = bootstrap.Modal.getInstance(modalCadastro);
    modal.hide();

    this.reset();
    renderizarPaginaFeed();
    mudarTela("feed ");
};

function renderizarPaginaFeed() {
    headerSaudacao.innerHTML = `Olá, ${usuarioSessao.nomeCompleto}`;
    imagensPerfil.forEach(
        (imagem) => (imagem.src = usuarioSessao.imagemPerfil)
    );

    listaAmigos.innerHTML = usuarioSessao.amigos
        .map((amigo, indice) => {
            let especial;
            if (usuarioSessao.amigos.length === 1) {
                especial = "unico";
            } else if (indice === 0) {
                especial = "primeiro";
            } else if (indice === usuarioSessao.amigos.length - 1) {
                especial = "ultimo";
            } else {
                especial = "meio";
            }
            return amigo.renderizarItemAmigo(especial);
        })
        .join("");

    listaUsuarios.innerHTML = Usuario.listaUsuarios
        .map((usuario, indice) => {
            let especial;
            if (Usuario.listaUsuarios.length === 1) {
                especial = "unico";
            } else if (indice === 0) {
                especial = "primeiro";
            } else if (indice === Usuario.listaUsuarios.length - 1) {
                especial = "ultimo";
            } else {
                especial = "meio";
            }
            return usuario.renderizarItemUsuario(
                especial,
                usuarioSessao,
                ehAdministrador,
                usuarioSessao.ehAmigo(usuario)
            );
        })
        .join("");

    if (usuarioSessao.amigos.length === 0) {
        listaAmigos.innerHTML =
            '<li class="text-center p-3">Você ainda não tem ninguém na lista de amigos.</li>';
    }

    totalAmigos.innerHTML = usuarioSessao.amigos.length;
    totalUsuarios.innerHTML = Usuario.listaUsuarios.length;

    const postagens = Postagem.listaPostagens
        .map((postagem, indicePostagem) => {
            if (
                usuarioSessao === postagem.autor ||
                usuarioSessao.ehAmigo(postagem.autor)
            ) {
                return postagem.renderizar(indicePostagem, usuarioSessao);
            }
            return;
        })
        .join("");

    listaPostagens.innerHTML =
        postagens !== ""
            ? postagens
            : '<div class="w-100 d-flex flex-grow-1 justify-content-center align-items-center">Nenhuma postagem, adicione amigos e veja aqui as atualizações</div>';
}

function adicionarAmigo(nomeUsuario) {
    try {
        const amigo = Usuario.buscarUsuario(nomeUsuario);
        usuarioSessao.adicionarAmigo(amigo);
        amigo.adicionarAmigo(usuarioSessao);
        renderizarPaginaFeed();
    } catch (error) {
        console.log(error);
    }
}
function removerAmigo(nomeUsuario) {
    try {
        const amigo = Usuario.buscarUsuario(nomeUsuario);
        usuarioSessao.removerAmigo(amigo);
        amigo.removerAmigo(usuarioSessao);
        renderizarPaginaFeed();
    } catch (error) {
        console.log(error);
    }
}
function removerUsuario(nomeUsuario) {
    if (ehAdministrador) {
        try {
            const usuario = Usuario.buscarUsuario(nomeUsuario);

            usuario.amigos.forEach((amigo) => {
                amigo.removerAmigo(usuario);
            });

            Postagem.listaPostagens.forEach((postagem) => {
                if (postagem.autor === usuario) {
                    usuarioSessao.apagarPostagem(postagem);
                    return;
                } else {
                    postagem.comentarios.forEach((comentario) => {
                        if (comentario.autor === usuario) {
                            postagem.apagarComentario(comentario);
                            return;
                        }
                    });
                }
            });

            usuarioSessao.excluirUsuario(usuario);
            renderizarPaginaFeed();
        } catch (error) {
            console.log(error);
        }
    }
}
function mudarTela(tela) {
    telaLogin.classList.replace("d-flex", "d-none");
    telaFeed.classList.replace("d-flex", "d-none");

    switch (tela) {
        case "login":
            telaLogin.classList.replace("d-none", "d-flex");
            break;
        case "feed":
            telaFeed.classList.replace("d-none", "d-flex");
            break;
        default:
            telaLogin.classList.replace("d-none", "d-flex");
            break;
    }
}

modalEditarPostagem.addEventListener("show.bs.modal", (evento) => {
    const button = evento.relatedTarget;
    const indicePostagem = button.getAttribute("data-bs-id");

    const postagem = Postagem.localizarPorIndice(indicePostagem);

    const inputDescricao =
        modalEditarPostagem.querySelector(".modal-body input");
    const botaoSalvar = modalEditarPostagem.querySelector(
        ".modal-body  button"
    );

    inputDescricao.value = postagem.descricao;

    botaoSalvar.onclick = function (eventoSalvar) {
        eventoSalvar.preventDefault();
        postagem.modificarDescricao(inputDescricao.value);
        const modal = bootstrap.Modal.getInstance(modalEditarPostagem);
        modal.hide();
        renderizarPaginaFeed();
    };
});

function adicionarComentario(evento) {
    evento.preventDefault();
    const indicePostagem = evento.target.getAttribute("data-id");
    const descricao = evento.target.querySelector("input").value;
    const postagem = Postagem.localizarPorIndice(indicePostagem);
    postagem.adicionarComentario(descricao, usuarioSessao);
    renderizarPaginaFeed();
}

function apagarComentario(idPostagem, idComentario) {
    const postagem = Postagem.localizarPorIndice(idPostagem);
    const comentario = postagem.localizarComentarioPorId(idComentario);
    postagem.apagarComentario(comentario);
    renderizarPaginaFeed();
}

function apagarPostagem(indicePostagem) {
    const postagem = Postagem.localizarPorIndice(indicePostagem);
    usuarioSessao.apagarPostagem(postagem);
    renderizarPaginaFeed();
}

botaoSair.addEventListener("click", () => {
    if (usuarioSessao !== undefined) {
        usuarioSessao.desconectar();
    }
    usuarioSessao = undefined;
    ehAdministrador = false;

    mudarTela("login");
});

window.adicionarAmigo = adicionarAmigo;
window.removerAmigo = removerAmigo;
window.removerUsuario = removerUsuario;
window.adicionarComentario = adicionarComentario;
window.apagarComentario = apagarComentario;
window.apagarPostagem = apagarPostagem;
