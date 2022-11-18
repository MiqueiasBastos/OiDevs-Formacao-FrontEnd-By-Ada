import Usuario from "./Usuario.class.js";

class Administrador extends Usuario {
    constructor(nomeCompleto, nomeUsuario, senha, usuarioGithub = ""){
        super(nomeCompleto, nomeUsuario, senha, usuarioGithub);
    }
    excluirUsuario(usuario) {
        if(!this.estaAutenticado) throw new Error('Usuário não autorizado.');
        const indexUsuario = Usuario.listaUsuarios.indexOf(usuario);
        if (indexUsuario !== -1) Usuario.listaUsuarios.splice(indexUsuario, 1);
    }
}

export default Administrador;
