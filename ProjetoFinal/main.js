import Administrador from "./class/Administrador.class.js";
import Postagem from "./class/Postagem.class.js";
import Usuario from "./class/Usuario.class.js";
import "./populate.js";
import { formCadastro, formLogin, formPostagem, telaFeed, telaLogin, modalCadastro, headerSaudacao, btnListaUsuarios } from "./elements.js";

let usuarioSessao;
let ehAdmistrador;

formLogin.onsubmit = function (event) {
    event.preventDefault();
    const form = new FormData(this);
    const inputUsuario = form.get("usuario");
    const inputSenha = form.get("senha");

    try {
        usuarioSessao = Usuario.login(inputUsuario, inputSenha);
        ehAdmistrador = usuarioSessao instanceof Administrador;

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
    ehAdmistrador = false;

    const modal = bootstrap.Modal.getInstance(modalCadastro);    
    modal.hide();

    this.reset();
    renderizarPaginaFeed();
};

function renderizarPaginaFeed() {
    headerSaudacao.innerHTML = `Olá, ${usuarioSessao.nomeCompleto}`;
    if(ehAdmistrador) {
        btnListaUsuarios.classList.replace('d-none', 'd-block');
    }
    document.querySelector("#btn-sair").addEventListener("click", () => {
        if(usuarioSessao !== undefined) {
            usuarioSessao.desconectar();
        }
        usuarioSessao = undefined;
        ehAdmistrador = false;
        btnListaUsuarios.classList.replace('d-block', 'd-none')

        telaLogin.classList.replace("d-none", "d-flex");
        telaFeed.classList.replace("d-flex", "d-none");
    });

    const imagemPerfil =

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

    if(usuarioSessao.amigos.length === 0) {
        document.querySelector("#lista-amigos").innerHTML = '<li class="text-center p-3">Você ainda não tem ninguém na lista de amigos.</li>'
    }

    document.querySelector('#total-amigos').innerHTML = usuarioSessao.amigos.length;

    telaLogin.classList.replace("d-flex", "d-none");
    telaFeed.classList.replace("d-none", "d-flex");

    const temPostagem = Postagem.listaPostagens.length > 0;
    document.querySelector("#postagens").innerHTML = temPostagem
        ? Postagem.listaPostagens
              .map((postagem) => postagem.renderizar(usuarioSessao))
              .join("")
        : '<div class="w-100 d-flex flex-grow-1 justify-content-center align-items-center">Nenhuma postagem</div>';

    const botoesNovoComentario = document.querySelectorAll(
        ".btn-novo-comentario"
    );
    console.log(botoesNovoComentario);
}


function adicionarAmigo(nomeUsuario){
     try {
        const amigo = Usuario.buscarUsuario(nomeUsuario)
        usuarioSessao.adicionarAmigo(amigo);
        amigo.adicionarAmigo(usuarioSessao);
        renderizarPaginaFeed();

     }
     catch(error){
        console.log(error);
     }
}

window.adicionarAmigo = adicionarAmigo;