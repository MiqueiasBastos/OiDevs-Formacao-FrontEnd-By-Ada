import Usuario from "./Usuario.class.js";

class Administrador extends Usuario {
    constructor(nomeCompleto, nomeUsuario, senha, usuarioGithub = "") {
        super(nomeCompleto, nomeUsuario, senha, usuarioGithub);
    }
    
    excluirUsuario(usuario) {
        if (!this.estaAutenticado) throw new Error("Usuário não autorizado.");
        const indiceUsuario = Usuario.listaUsuarios.indexOf(usuario);
        if (indiceUsuario !== -1) Usuario.listaUsuarios.splice(indiceUsuario, 1);
    }
}

export default Administrador;
