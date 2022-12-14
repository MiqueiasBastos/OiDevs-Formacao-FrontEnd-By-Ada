import { faker } from "@faker-js/faker"

const db = {
    tabelaPessoaFisica: [],
    tabelaPessoaJuridica: []
}


export class Db {

    static async create(dados, tabela) {
        const salvar = {
            id: db.tabelaPessoaFisica.length + 1,
            ...dados,
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent()
        }
        db[tabela].push(salvar)
        return Promise.resolve(salvar)
    }

    static async findById(id, tabela) {
        const pessoa = db[tabela].find(pessoa => pessoa.id == id)
        if (!pessoa) {
            return Promise.reject("Product not found")
        }
        return Promise.resolve(pessoa)
    }

    static async find(tabela) {
        return Promise.resolve(db[tabela])
    }

    static async update(id, dados, tabela) {
        const index = db[tabela].findIndex(pessoa => pessoa.id == id)
        db[tabela][index] = {
            id: Number(id), ...dados,
            createdAt: db[tabela][index].createdAt,
            updatedAt: faker.date.recent()
        }
        return Promise.resolve(db.tabelaPessoaFisica[index])
    }

    static async delete(id, tabela) {
        const index = db[tabela].findIndex(pessoa => pessoa.id == id)
        db[tabela].splice(index, 1)
        return Promise.resolve(db.tabelaPessoaFisica)

    }
}

