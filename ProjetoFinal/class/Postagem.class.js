import Comentario from "./Comentario.class.js";

class Postagem {
    #descricao;
    #comentarios;
    #timestamp;
    #autor;

    constructor(descricao, autor) {
        this.#descricao = descricao;
        this.#autor = autor;
        this.#comentarios = [];
        this.#timestamp = Date.now();
        Postagem.listaPostagens.push(this);
        Postagem.listaPostagens.sort((a, b) => b.timestamp - a.timestamp);
    }

    apagarComentario(comentario) {
        const indexComentario = this.#comentarios.indexOf(comentario);

        if (indexComentario !== -1) {
            this.#comentarios.splice(indexComentario, 1);
        }
    }
    modificarDescricao(descricao) {
        if (typeof descricao !== "string")
            throw new TypeError("Descrição inválida.");
        this.#descricao = descricao;
    }
    adicionarComentario(descricao, usuario) {
        this.#comentarios.push(new Comentario(descricao, usuario));
    }
    renderizar(idPostagem, usuarioSessao) {
        return `
            <div class="card w-100 mt-3 shadow-sm">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-3 justify-content-between">
                        <div class="d-flex">
                            <img src="${this.#autor.imagemPerfil}" class="rounded-circle me-3" height="45" alt="">
                            <div>
                                <h6 class="card-title m-0">${this.#autor.nomeCompleto}</h6>
                                <span class="text-muted fst-italic">${this.dataFormatada}</span>
                            </div>
                        </div>
                        ${
                            usuarioSessao === this.#autor
                                ? `<button type="button" class="btn btn-light bg-white border-0" data-bs-toggle="modal" data-bs-target="#modal-editar-postagem" data-bs-id="${idPostagem}">
                                    <i class="bi bi-pencil-fill"></i>
                                </button>`
                                : ''
                            }
                    </div>
                    <p class="card-text">${this.#descricao}</p>
                    <hr>
                    <h6 class="mb-3">Comentários (${this.#comentarios.length})</h6>
                    <ul class="list-unstyled">
                        ${this.#comentarios.map((comentario, idComentario) => comentario.renderizar(usuarioSessao, idPostagem, idComentario)).join("")}
                    </ul>
                    <form onsubmit="adicionarComentario(event)" data-id="${idPostagem}">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Digite seu comentário">
                            <button class="btn btn-success btn-novo-comentario" type="submit">Comentar</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
    }

    localizarComentarioPorId (id) {
        return this.#comentarios[id];
    }

    get descricao() {
        return this.#descricao;
    }
    get dataFormatada() {
        const data = new Date(this.#timestamp);
        return `${data.toLocaleString("pt-BR", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        })} às ${data.toLocaleString("pt-BR", {
            hour: "numeric",
            minute: "numeric",
        })}`;
    }
    get timestamp() {
        return this.#timestamp;
    }
    get autor() {
        return this.#autor
    }

    static listaPostagens = [];

    static localizarPorId (id) {
        return Postagem.listaPostagens[id];
    }
}

export default Postagem;
