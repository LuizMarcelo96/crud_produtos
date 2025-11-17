import { response } from "express";
import produtoService from "../services/produto.services.js";

async function createProdutoController(request, response) {
    const novoProduto = request.body;

    try {
        const produto = await produtoService.createProdutoService(novoProduto);
        response.status(201).send({produto});
    } catch(error) {
        response.status(400).send(error.message);
    }
}

async function findAllProdutoController(request, response) {
    try {
        const produtos = await produtoService.findAllProdutoService();
        response.status(200).send({produtos});
    } catch(error) {
        response.status(404).send(error.message);
    }
}

async function findProdutoByIdController(request, response) {

    const {id} = request.params;

    try {
        const produto = await produtoService.findProdutoByIdService(id);
        response.status(200).send({produto});
    } catch(error) {
        response.status(404).send(error.message);
    }
}

async function updateProdutoController(request, response) {
    
    const {id} = request.params;
    const novoProduto = request.body;

    try {
        const produto = await produtoService.updateProdutoService(id, novoProduto);
        response.status(201).send({produto});
    } catch(error) {
        response.status(400).send(error.message);
    }

}

export default {
    createProdutoController,
    findAllProdutoController,
    findProdutoByIdController,
    updateProdutoController
}