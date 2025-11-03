import produtoService from "../services/produto.services.js";

async function createProduto(req, res) {
const novoProduto = req.body;  

    try {    
        const produto = await produtoService.createProdutoService(novoProduto);
        res.status(201).send({produto});

    } catch (error){
        res.status(400).send(error.message);

    }

}
export default {
    createProdutoController
};