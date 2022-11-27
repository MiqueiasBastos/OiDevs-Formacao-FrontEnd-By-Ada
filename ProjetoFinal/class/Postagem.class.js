import Comentario from "./Comentario.class.js";
import Usuario from "./Usuario.class.js";

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
        const indiceComentario = this.#comentarios.indexOf(comentario);
        if (indiceComentario !== -1) this.#comentarios.splice(indiceComentario, 1);
    }
    modificarDescricao(descricao) {
        if (typeof descricao !== "string") throw new TypeError("Descrição inválida.");
        this.#descricao = descricao;
    }
    adicionarComentario(descricao, autor) {
        this.#comentarios.push(new Comentario(descricao, autor));
    }
    renderizar(indicePostagem, usuarioSessao) {
        return `
            <div class="card w-100 mt-3 shadow-sm">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-3 justify-content-between">
                        <div class="d-flex">
                            <img src="${
                                this.#autor.imagemPerfil
                            }" class="rounded-circle me-3" height="45" alt="">
                            <div>
                                <h6 class="card-title m-0">${
                                    this.#autor.nomeCompleto
                                }</h6>
                                <span class="text-muted fst-italic">${
                                    this.dataFormatada
                                }</span>
                            </div>
                        </div>
                        ${
                            usuarioSessao === this.#autor
                                ? `
                                    <div class="dropdown">
                                        <button class="btn btn-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu p-0">
                                            <li class=" border-1 border-bottom">
                                                <button type="button" class="btn btn-light w-100 border-1 rounded-0 rounded-top text-start" data-bs-toggle="modal" data-bs-target="#modal-editar-postagem" data-bs-id="${indicePostagem}">
                                                    <i class="bi bi-pencil-fill"></i> Editar
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="btn btn-light w-100 border-0 rounded-0 rounded-bottom text-start" onclick="apagarPostagem('${indicePostagem}')">
                                                    <i class="bi bi-trash3-fill"></i> Excluir
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                `
                                : ""
                        }
                    </div>
                    <p class="card-text">${this.#descricao}</p>
                    <hr>
                    <h6 class="mb-3">Comentários (${
                        this.#comentarios.length
                    })</h6>
                    <ul class="list-unstyled">
                        ${this.#comentarios
                            .map((comentario, indiceComentario) =>
                                comentario.renderizar(
                                    usuarioSessao,
                                    indicePostagem,
                                    indiceComentario
                                )
                            )
                            .join("")}
                    </ul>
                    <form onsubmit="adicionarComentario(event)" data-id="${indicePostagem}">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Digite seu comentário">
                            <button class="btn btn-success btn-novo-comentario" type="submit">Comentar</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
    }
    localizarComentarioPorIndice(indice) {
        const comentario = this.#comentarios[indice];
        if (comentario === undefined) throw new Error("Comentário não encontrado.");
        return comentario;
    }
    objetoLocalStorage(){
        return {
            descricao: this.#descricao,
            comentarios: this.#comentarios.map(comentario => {
                return {
                    descricao: comentario.descricao,
                    autor: comentario.autor.nomeUsuario
                }
            }),
            timestamp: this.#timestamp,
            autor: this.#autor.nomeUsuario,
        }
    }
    definirTimestamp(timestamp){
        this.#timestamp = timestamp;
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
        return this.#autor;
    }
    get comentarios() {
        return this.#comentarios;
    }
    static listaPostagens = [];

    static localizarPorIndice(indice) {
        const postagem = Postagem.listaPostagens[indice];
        if(postagem === undefined) throw new Error("Postagem não encontrada");
        return Postagem.listaPostagens[indice];
    }
    static criarDeObjeto(objetoPostagem) {
        const { descricao, comentarios, timestamp, autor } = objetoPostagem;

        const postagem = new Postagem(descricao, Usuario.buscarUsuario(autor));
        comentarios.forEach(({descricao: descricaoComentario, autor}) => {
            postagem.adicionarComentario(descricaoComentario, Usuario.buscarUsuario(autor));
        })
        postagem.definirTimestamp(timestamp);
        return postagem
    }

}

export default Postagem;
