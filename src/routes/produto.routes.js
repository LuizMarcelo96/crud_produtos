import { Router } from "express";
import produtoRepository from "../repositories/produto.repository.js";

const produtoRouters = Router();

produtoRouters.post("/produtos", async (req, res) => {
    try {
        const novoProduto = await produtoRepository.createProdutoRepository(req.body);
        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default produtoRouters;