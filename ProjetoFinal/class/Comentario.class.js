class Comentario {
    #descricao;
    #usuario;

    constructor(descricao, usuario) {
        this.#descricao = descricao;
        this.#usuario = usuario;
    }

    renderizar() {
        return `
            <li class="ms-3 border-start border-3 border-success ps-2 ">
                <h6>${this.#usuario.nomeCompleto}</h6>
                <p class="fst-italic">${this.#descricao}</p>
            </li>
        `;
    }
}

export default Comentario;
