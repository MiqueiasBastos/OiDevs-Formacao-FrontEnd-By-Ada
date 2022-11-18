import Administrador from "./class/Administrador.class.js";
import Postagem from "./class/Postagem.class.js";
import Usuario from "./class/Usuario.class.js";
import "./populate.js";
import { formCadastro, formLogin, formPostagem, telaFeed, telaLogin, modalCadastro, headerSaudacao, btnListaUsuarios } from "./elements.js";

let usuarioSessao;
let ehAdministrador;

formLogin.onsubmit = function (event) {
    event.preventDefault();
    const form = new FormData(this);
    const inputUsuario = form.get("usuario");
    const inputSenha = form.get("senha");

    try {
        usuarioSessao = Usuario.login(inputUsuario, inputSenha);
        ehAdministrador = usuarioSessao instanceof Administrador;
        this.reset();
        renderizarPaginaFeed();
    } catch (error) {
        alert(error.message);
    }
};

formPostagem.onsubmit = function (event) {
    event.preventDefault();
    const form = new FormData(this);
    const inputTexto = form.get("texto");

    try {
        new Postagem(inputTexto, usuarioSessao);
        this.reset();
        renderizarPaginaFeed();
    } catch (error) {
        alert(error.message);
    }
};

formCadastro.onsubmit = function (event) {
    event.preventDefault();
    const form = new FormData(this);

    const nomeCompleto = form.get("nome-completo");
    const usuario = form.get("usuario");
    const senha = form.get("senha");
    const usuarioGithub = form.get("usuario-github");

    usuarioSessao = new Usuario(nomeCompleto, usuario, senha, usuarioGithub);
    ehAdministrador = false;

    const modal = bootstrap.Modal.getInstance(modalCadastro);    
    modal.hide();

    this.reset();
    renderizarPaginaFeed();
};

function renderizarPaginaFeed() {
    headerSaudacao.innerHTML = `Olá, ${usuarioSessao.nomeCompleto}`;
    document.querySelector("#header-imagem-perfil").src = usuarioSessao.imagemPerfil;
    document.querySelector("#postagem-imagem-perfil").src = usuarioSessao.imagemPerfil;

    document.querySelector("#lista-amigos").innerHTML = usuarioSessao.amigos.map((amigo, index) => {
        let especial;
        if(usuarioSessao.amigos.length === 1){
            especial = 'unico';
        }
        else if(index === 0) {
            especial = 'primeiro';
        }
        else if(index === usuarioSessao.amigos.length - 1) {
            especial = 'ultimo';
        }
        else {
            especial = 'meio';
        }
        return amigo.renderizarItemAmigo(especial)
    }).join('');

    document.querySelector("#lista-usuarios").innerHTML = Usuario.listaUsuarios.map((usuario, index) => {
        let especial;
        if(Usuario.listaUsuarios.length === 1){
            especial = 'unico';
        }
        else if(index === 0) {
            especial = 'primeiro';
        }
        else if(index === Usuario.listaUsuarios.length - 1) {
            especial = 'ultimo';
        }
        else {
            especial = 'meio';
        }
        return usuario.renderizarItemUsuario(especial, usuarioSessao, ehAdministrador, usuarioSessao.ehAmigo(usuario))
    }).join('');

    if(usuarioSessao.amigos.length === 0) {
        document.querySelector("#lista-amigos").innerHTML = '<li class="text-center p-3">Você ainda não tem ninguém na lista de amigos.</li>'
    }

    document.querySelector('#total-amigos').innerHTML = usuarioSessao.amigos.length;
    document.querySelector('#total-usuarios').innerHTML = Usuario.listaUsuarios.length;

    mudarTela('feed');

    const postagens = Postagem.listaPostagens
              .map((postagem) => {
                if(usuarioSessao === postagem.autor || usuarioSessao.ehAmigo(postagem.autor)) {
                    return postagem.renderizar(usuarioSessao)
                }
                return;
            }).join("");
            
    document.querySelector("#postagens").innerHTML = postagens !== '' ? postagens : '<div class="w-100 d-flex flex-grow-1 justify-content-center align-items-center">Nenhuma postagem, adicione amigos e veja aqui as atualizações</div>';

    const botoesNovoComentario = document.querySelectorAll(
        ".btn-novo-comentario"
    );
    // console.log(botoesNovoComentario);
}

function adicionarAmigo(nomeUsuario){
    try {
        const amigo = Usuario.buscarUsuario(nomeUsuario);
        usuarioSessao.adicionarAmigo(amigo);
        amigo.adicionarAmigo(usuarioSessao);
        renderizarPaginaFeed();
     }
     catch(error){
        console.log(error);
    }
}

function removerAmigo(nomeUsuario){
    try {
        const amigo = Usuario.buscarUsuario(nomeUsuario);
        usuarioSessao.removerAmigo(amigo);
        amigo.removerAmigo(usuarioSessao);
        renderizarPaginaFeed();
     }
     catch(error){
        console.log(error);
     }
}
function removerUsuario(nomeUsuario){
    try {
        const usuario = Usuario.buscarUsuario(nomeUsuario);
        console.log(Usuario.listaUsuarios)

        usuario.amigos.forEach(amigo=>{
            amigo.removerAmigo(usuario);
        })

        Postagem.listaPostagens.forEach(postagem => {
            if(postagem.autor === usuario){
                usuarioSessao.apagarPostagem(postagem);
                return;
            }
            postagem.comentarios.forEach(comentario => {
                if(comentario.autor === usuario){
                    postagem.apagarComentario(comentario);
                    return;
                }
            })
        });

        if(ehAdministrador) {
            usuarioSessao.excluirUsuario(usuario)
        }
        renderizarPaginaFeed();
     }
     catch(error){
        console.log(error);
     }
}

document.querySelector("#btn-sair").addEventListener("click", () => {
    if(usuarioSessao !== undefined) {
        usuarioSessao.desconectar();
    }
    usuarioSessao = undefined;
    ehAdministrador = false;

    mudarTela('login');
});

function mudarTela(tela){
    telaLogin.classList.replace("d-flex", "d-none");
    telaFeed.classList.replace("d-flex", "d-none");
    
    switch (tela) {
        case 'login':
            telaLogin.classList.replace("d-none", "d-flex");
            break;
        case 'feed':
            telaFeed.classList.replace("d-none", "d-flex");
            break;
        default:
            telaLogin.classList.replace("d-none", "d-flex");
            break;
    }
}

window.adicionarAmigo = adicionarAmigo;
window.removerAmigo = removerAmigo;
window.removerUsuario = removerUsuario;