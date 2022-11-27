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

recuperarDadosLocalStorage();
console.log(Postagem.listaPostagens)

formLogin.onsubmit = function (evento) {
    evento.preventDefault();
    const formulario = new FormData(this);
    const nomeUsuario = formulario.get("usuario");
    const senha = formulario.get("senha");

    try {
        usuarioSessao = Usuario.login(nomeUsuario, senha);
        ehAdministrador = usuarioSessao instanceof Administrador;
        this.reset();
        gravarDadosLocalStorage();
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
        gravarDadosLocalStorage();
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
    gravarDadosLocalStorage();
    renderizarPaginaFeed();
    mudarTela("feed");
};

function renderizarPaginaFeed() {
    headerSaudacao.innerHTML = `Olá, ${usuarioSessao.nomeCompleto}`;
    imagensPerfil.forEach(
        (imagem) => (imagem.src = usuarioSessao.imagemPerfil)
    );

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

    listaAmigos.innerHTML = usuarioSessao.amigos
        .map((amigo) => amigo.renderizarItemModal(usuarioSessao))
        .join("");

    if (usuarioSessao.amigos.length === 0) {
        listaAmigos.innerHTML =
            '<li class="text-center p-3">Você ainda não tem ninguém na lista de amigos.</li>';
    }

    listaAmigos.querySelector("li:first-child").classList.remove("mt-3");
    listaAmigos
        .querySelector("li:last-child")
        .classList.remove("pb-3", "border-bottom");

    listaUsuarios.innerHTML = Usuario.listaUsuarios
        .map((usuario) => usuario.renderizarItemModal(usuarioSessao))
        .join("");

    listaUsuarios.querySelector("li:first-child").classList.remove("mt-3");
    listaUsuarios
        .querySelector("li:last-child")
        .classList.remove("pb-3", "border-bottom");

    totalAmigos.innerHTML = usuarioSessao.amigos.length;
    totalUsuarios.innerHTML = Usuario.listaUsuarios.length;
}

function adicionarAmigo(nomeUsuario) {
    try {
        const amigo = Usuario.buscarUsuario(nomeUsuario);
        usuarioSessao.adicionarAmigo(amigo);
        amigo.adicionarAmigo(usuarioSessao);
        gravarDadosLocalStorage();
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
        gravarDadosLocalStorage();
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
                    console.log(postagem)
                    postagem.comentarios.forEach((comentario) => {
                        if (comentario.autor === usuario) {
                            postagem.apagarComentario(comentario);
                            return;
                        }
                    });
                }
            });

            usuarioSessao.excluirUsuario(usuario);
            gravarDadosLocalStorage();
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
        gravarDadosLocalStorage();
        renderizarPaginaFeed();
    };
});

function adicionarComentario(evento) {
    evento.preventDefault();
    const indicePostagem = evento.target.getAttribute("data-id");
    const descricao = evento.target.querySelector("input").value;
    const postagem = Postagem.localizarPorIndice(indicePostagem);
    postagem.adicionarComentario(descricao, usuarioSessao);
    gravarDadosLocalStorage();
    renderizarPaginaFeed();
}

function apagarComentario(idPostagem, idComentario) {
    const postagem = Postagem.localizarPorIndice(idPostagem);
    const comentario = postagem.localizarComentarioPorId(idComentario);
    postagem.apagarComentario(comentario);
    gravarDadosLocalStorage();
    renderizarPaginaFeed();
}

function apagarPostagem(indicePostagem) {
    const postagem = Postagem.localizarPorIndice(indicePostagem);
    usuarioSessao.apagarPostagem(postagem);
    gravarDadosLocalStorage();
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

function gravarDadosLocalStorage() {
    const postagens = Postagem.listaPostagens.map((postagem) =>
        postagem.objetoLocalStorage()
    );
    const usuarios = Usuario.listaUsuarios.map((usuario) =>
        usuario.objetoLocalStorage()
    );
    localStorage.setItem("connectada-postagens", JSON.stringify(postagens));
    localStorage.setItem("connectada-usuarios", JSON.stringify(usuarios));
}

function recuperarDadosLocalStorage() {
    const usuariosLocais = localStorage.getItem("connectada-usuarios");
    if (usuariosLocais) {
        const objetosUsuarios = JSON.parse(usuariosLocais);

        const listaUsuarios = objetosUsuarios.map(usuario => Usuario.criarDeObjeto(usuario));

        listaUsuarios.forEach((usuario, index) => {
            objetosUsuarios[index].amigos.forEach((amigo) => {
                usuario.adicionarAmigo(Usuario.buscarUsuario(amigo));
            });
        });
    }

    const postagensLocal = localStorage.getItem("connectada-postagens");
    if (postagensLocal) {
        const objetosPostagens = JSON.parse(postagensLocal);
        objetosPostagens.forEach((postagem) => {
            Postagem.criarDeObjeto(postagem);
        });
    }
}

window.adicionarAmigo = adicionarAmigo;
window.removerAmigo = removerAmigo;
window.removerUsuario = removerUsuario;
window.adicionarComentario = adicionarComentario;
window.apagarComentario = apagarComentario;
window.apagarPostagem = apagarPostagem;
