import Postagem from "./Postagem.class.js";
import md5 from "../libs/md5.js";

class Usuario {
    #nomeCompleto;
    #nomeUsuario;
    #senha;
    #listaAmigos;
    #usuarioGithub;
    #estaAutenticado;

    constructor(nomeCompleto, nomeUsuario, senha, usuarioGithub = "") {
        if (typeof nomeUsuario !== "string") throw new TypeError("Usuário inválido");
        if (typeof senha !== "string") throw new TypeError("Senha invalida");

        const usuarioJaExiste = Usuario.listaUsuarios.findIndex(usuario => usuario.nomeUsuario === nomeUsuario) !== -1
            ? true
            : false;

        if(usuarioJaExiste) throw new Error('O usuário já existe!');

        this.#nomeCompleto = nomeCompleto;
        this.#nomeUsuario = nomeUsuario;
        this.#senha = md5(senha);
        this.#usuarioGithub = usuarioGithub;
        this.#estaAutenticado = false;
        this.#listaAmigos = [];

        Usuario.listaUsuarios.push(this);
    }
    autenticar(nomeUsuario, senha) {
        if (nomeUsuario !== this.#nomeUsuario || md5(senha) !== this.#senha) throw new Error('Usuário e/ou senha inválidos!')
        this.#estaAutenticado = true;
        return this;
    }
    desconectar() {
        this.#estaAutenticado = false;
    }
    adicionarAmigo(usuario) {
        if(!this.#estaAutenticado) throw new Error('Usuário não autorizado.');
        this.#listaAmigos.push(usuario)
    }
    removerAmigo(usuario) {
        if(!this.#estaAutenticado) throw new Error('Usuário não autorizado.');
        const indexUsuario = this.#listaAmigos.indexOf(usuario);

        if(indexUsuario !== -1){
            this.#listaAmigos.splice(indexUsuario, 1);
        }
    }
    criarPostagem(titulo, descricao) {
        if(!this.#estaAutenticado) throw new Error('Usuário não autorizado.');
        new Postagem(titulo, descricao, this);
    }
    comentarPostagem(postagem, comentario) {
        if(!this.#estaAutenticado) throw new Error('Usuário não autorizado.');
        postagem.adicionarComentario(comentario, this);
    }

    ehAmigo (usuario) {
        return this.#listaAmigos.findIndex(amigo => amigo === usuario) !== -1;
    }
    
    static listaUsuarios = [];

    get nomeUsuario() {
        return this.#nomeUsuario;
    }
    get nomeCompleto() {
        return this.#nomeCompleto;
    }
    get estaAutenticado() {
        return this.#estaAutenticado;
    }
    get usuarioGithub(){
        return this.#usuarioGithub
    }

    get listaAmigos() {
        return this.#listaAmigos;
    }

    static login(nomeUsuario, senha) {
        let indiceUsuario = Usuario.listaUsuarios.findIndex((usuario)=>{
            return usuario.nomeUsuario === nomeUsuario;
        })
        if(indiceUsuario === -1) throw new Error('Usuário e/ou senha inválidos.')

        try {
                return Usuario.listaUsuarios[indiceUsuario].autenticar(nomeUsuario, senha);
        }
        catch(error){
            console.log(error);
        }
    }
}

export default Usuario;
