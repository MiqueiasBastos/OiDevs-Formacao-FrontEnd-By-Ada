import Administrador from "./class/Administrador.class.js";
import Postagem from "./class/Postagem.class.js";
import Usuario from "./class/Usuario.class.js";
import './pupolate.js';
let usuarioSessao;
let ehAdmistrador;

const formLogin = document.querySelector("#form-login");
const formCadastro = document.querySelector("#form-cadastro");
const formPostagem = document.querySelector("#form-publicar");

const telaLogin = document.querySelector('#tela-login');
const telaFeed = document.querySelector('#tela-feed');

// Formulario de Login
formLogin.onsubmit = function (event) {
    event.preventDefault();
    const form = new FormData(this);
    const inputUsuario = form.get("input-usuario");
    const inputSenha = form.get("input-senha");

    try {
        usuarioSessao = Usuario.login(inputUsuario, inputSenha);
        ehAdmistrador = usuarioSessao instanceof Administrador;
        formLogin.reset();
        renderizarPaginaFeed();
    }
    catch(error) {
        alert(error.message);
    }
};

formPostagem.onsubmit = function (event) {
    event.preventDefault();
    const form = new FormData(this);
    const inputDescricao = form.get("input-descricao");

    try {
        new Postagem(inputDescricao, usuarioSessao);
        this.reset()
        renderizarPaginaFeed();
    }

    catch(error) {
        alert(error.message);
    }
    renderizarPaginaFeed()
};

formCadastro.onsubmit = function (event) {
    event.preventDefault();
    const form = new FormData(this);

    const nomeCompleto = form.get("input-nome-completo-cadastro");
    const usuario = form.get("input-usuario-cadastro");
    const usuarioGithub = form.get("input-usuario-github-cadastro");
    const senha = form.get("input-senha-cadastro");
    form.
    console.log(nomeCompleto + "@" + usuario + "@" + senha + "@" + usuarioGithub);
};

function renderizarPaginaFeed() {
    document.querySelector('#header-saudacao').innerHTML = `
        <p class="m-0 fw-bold">Olá, ${usuarioSessao.nomeCompleto}</p>
        <button type="button" data-bs-toggle="modal" data-bs-target="#modal-lista-amigos" class="btn btn-sm p-0 text-white me-2"><i class="bi bi-people-fill"></i> Amigos</button>
        ${
            ehAdmistrador ? '<button type="button" data-bs-toggle="modal" data-bs-target="#modal-usuarios" class="btn btn-sm p-0 text-white me-2"><i class="bi bi-person-fill"></i> Usuários</button>' : ''
        }
        <button type="button" id="btn-sair" class="btn btn-sm p-0 text-white"><i class="bi bi-box-arrow-right"></i> Sair</a>
    `;
    document.querySelector('#btn-sair').addEventListener('click', ()=>{
        usuarioSessao.desconectar();
        usuarioSessao = undefined;

        telaLogin.classList.replace('d-none', 'd-flex');
        telaFeed.classList.replace('d-flex', 'd-none');
    })

    document.querySelector('#header-imagem-perfil').src = `https://github.com/${usuarioSessao.usuarioGithub}.png`;
    document.querySelector('#postagem-imagem-perfil').src = `https://github.com/${usuarioSessao.usuarioGithub}.png`;
    
    telaLogin.classList.replace('d-flex', 'd-none');
    telaFeed.classList.replace('d-none', 'd-flex');

    const temPostagem = Postagem.listaPostagens.length > 0;
    document.querySelector('#postagens').innerHTML = temPostagem
        ? Postagem.listaPostagens.map(postagem => postagem.renderizar(usuarioSessao)).join('')
        : '<div class="w-100 d-flex flex-grow-1 justify-content-center align-items-center">Nenhuma postagem</div>';

    const botoesNovoComentario = document.querySelectorAll('.btn-novo-comentario');
    console.log(botoesNovoComentario)
}