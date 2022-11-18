class Comentario {
    #descricao;
    #usuario;

    constructor(descricao, usuario) {
        this.#descricao = descricao;
        this.#usuario = usuario;
    }

    renderizar(usuarioSessao, idPostagem, idComentario) {
        return `
            <li class="ms-3 border-start border-3 border-success ps-2">
                <h6 class="d-flex align-items-center">
                    ${this.#usuario.nomeCompleto}
                    ${
                        this.#usuario === usuarioSessao
                            ? `<button class="btn btn-link text-danger p-0 ms-1" onclick="apagarComentario(${idPostagem}, ${idComentario})"><i class="bi bi-trash3-fill"></i></button>`
                            : ''
                    }
                </h6>
                <p class="fst-italic">${this.#descricao}</p>
            </li>
        `;
    }
}

export default Comentario;
