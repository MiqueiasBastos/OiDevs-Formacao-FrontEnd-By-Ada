import Postagem from "./Postagem.class.js";
import md5 from "../libs/md5.js";

class Usuario {
    #nomeCompleto;
    #nomeUsuario;
    #senha;
    #amigos = [];
    #usuarioGithub;
    #estaAutenticado = false;

    constructor(nomeCompleto, nomeUsuario, senha, usuarioGithub = "") {
        if (typeof nomeUsuario !== "string") throw new TypeError("Usuário inválido");
        if (typeof senha !== "string") throw new TypeError("Senha invalida");

        const usuarioJaExiste = Usuario.listaUsuarios.findIndex(usuario => usuario.nomeUsuario === nomeUsuario) !== -1
            ? true
            : false;

        if (usuarioJaExiste) throw new Error("O usuário já existe!");

        this.#nomeCompleto = nomeCompleto;
        this.#nomeUsuario = nomeUsuario;
        this.#senha = md5(senha);
        this.#usuarioGithub = usuarioGithub;

        Usuario.listaUsuarios.push(this);
    }

    autenticar(nomeUsuario, senha) {
        const senhaHash = md5(senha);
        if (nomeUsuario !== this.#nomeUsuario || senhaHash !== this.#senha) throw new Error("Usuário e/ou senha inválidos!");
        this.#estaAutenticado = true;
        return this;
    }
    desconectar() {
        this.#estaAutenticado = false;
    }
    adicionarAmigo(usuario) {
        this.#amigos.push(usuario);
    }
    removerAmigo(usuario) {
        const indiceUsuario = this.#amigos.indexOf(usuario);
        if (indiceUsuario !== -1) this.#amigos.splice(indiceUsuario, 1);
    }
    criarPostagem(titulo, descricao) {
        if (!this.#estaAutenticado) throw new Error("Usuário não autorizado.");
        new Postagem(titulo, descricao, this);
    }
    apagarPostagem(postagem) {
        if (!this.#estaAutenticado) throw new Error("Usuário não autorizado.");
        const indicePostagem = Postagem.listaPostagens.indexOf(postagem);
        if (indicePostagem !== -1) Postagem.listaPostagens.splice(indicePostagem, 1);
    }
    comentarPostagem(postagem, comentario) {
        if (!this.#estaAutenticado) throw new Error("Usuário não autorizado.");
        postagem.adicionarComentario(comentario, this);
    }
    ehAmigo(usuario) {
        return this.#amigos.findIndex((amigo) => amigo === usuario) !== -1;
    }
    renderizarItemAmigo(especial = ''){
        const inicio = especial !== 'primeiro' && especial !== 'unico';
        const final = especial !== 'ultimo' && especial !== 'unico';

        return `
            <li class="d-flex justify-content-between align-items-center ${inicio && 'mt-3'} ${final && 'border-bottom pb-3'}">
                <div class="d-flex align-items-center">
                    <img src="${this.imagemPerfil}" class="rounded-circle me-3" height="50" width="50" alt="">
                    <h6>${this.#nomeCompleto}</h6>
                </div>
                <button type="button" class="btn btn-outline-danger" onclick="removerAmigo('${this.#nomeUsuario}')"><i class="bi bi-trash3-fill"></i> Remover</button>
            </li>
        `;
    }
    renderizarItemUsuario(especial = '', usuarioSessao, ehAdministrador, ehAmigo){
        const inicio = especial !== 'primeiro' && especial !== 'unico';
        const final = especial !== 'ultimo' && especial !== 'unico';

        return `
            <li class="d-flex justify-content-between align-items-center ${inicio && 'mt-3'} ${final && 'border-bottom pb-3'}">
                <div class="d-flex align-items-center">
                    <img src="${this.imagemPerfil}" class="rounded-circle me-3"
                        height="50" width="50" alt="">
                    <h6>${this.#nomeCompleto}</h6>
                </div>
                <div>
                    ${
                        usuarioSessao !== this
                            ? ehAmigo
                                ? `<button type="button" class="btn btn-outline-success" onclick="removerAmigo('${this.#nomeUsuario}')"><i class="bi bi-person-check-fill"></i> Amigo</button>`
                                : `<button type="button" class="btn btn-success" onclick="adicionarAmigo('${this.#nomeUsuario}')"><i class="bi bi-person-plus-fill"></i> Adicionar</button>`
                            : ''
                        }
                    ${
                        usuarioSessao !== this
                            ? ehAdministrador
                                ? `<button type="button" class="btn btn-outline-danger" onclick="removerUsuario('${this.#nomeUsuario}')"><i class="bi bi-trash3-fill"></i> Excluir</button>`
                                : ''
                            : ''
                }
                </div>
            </li>
        `;
    }

    get nomeUsuario() {
        return this.#nomeUsuario;
    }
    get nomeCompleto() {
        return this.#nomeCompleto;
    }
    get estaAutenticado() {
        return this.#estaAutenticado;
    }
    get usuarioGithub() {
        return this.#usuarioGithub;
    }
    get amigos() {
        return this.#amigos;
    }
    get imagemPerfil() {
        const imagem =
            this.usuarioGithub !== ""
                ? `https://github.com/${this.usuarioGithub}.png`
                : "./assets/usuario-padrao.jpg";
        return imagem;
    }

    static listaUsuarios = [];

    static login(nomeUsuario, senha) {
        const usuario = Usuario.buscarUsuario(nomeUsuario);
        return usuario.autenticar(nomeUsuario, senha);
    }
    static buscarUsuario(nomeUsuario) {
        const indiceUsuario = Usuario.listaUsuarios.findIndex(usuario => usuario.nomeUsuario === nomeUsuario);

        if (indiceUsuario === -1) throw new Error("Usuário não encontrado");
        return Usuario.listaUsuarios[indiceUsuario]
    }
}

export default Usuario;
