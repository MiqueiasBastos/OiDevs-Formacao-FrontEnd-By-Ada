import express from "express"
import cors from "cors"
import { Db } from "./db.js"

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (_, res) => {
    res.send("Api ok")
})



app.get("/products", async (req, res) => {
    const products = await Db.find("tabelaPessoaFisica")
    return res.json(products)
})

app.get("/products/:id", async (req, res) => {
    try {
        const product = await Db.findById(req.params.id, "tabelaPessoaFisica")
        return res.json(product)
    } catch (err) {
        return res.status(404).send(err)
    }
})

app.put("/products/:id", async (req, res) => {
    try {
        await Db.findById(req.params.id, "tabelaPessoaFisica")
        const product = await Db.update(req.params.id, req.body, "tabelaPessoaFisica")
        return res.json(product)
    } catch (err) {
        return res.status(404).send(err)
    }

})

app.delete("/products/:id", async (req, res) => {
    try {
        await Db.findById(req.params.id, "tabelaPessoaFisica")
        const product = await Db.delete(req.params.id, "tabelaPessoaFisica")
        return res.json(product)
    } catch (err) {
        return res.status(404).send(err)
    }

})

app.post("/products", async (req, res) => {
    const data = req.body
    if (!data.category) {
        return res.status(400).json("Category is required")
    }
    if (!data.name) {
        return res.status(400).json("Name is required")
    }
    if (!data.price) {
        return res.status(400).json("Price is required")
    }
    const product = await Db.create(req.body, "tabelaPessoaFisica")
    return res.json(product)
})




const port = 9090
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})