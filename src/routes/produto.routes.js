import produtoController from "../controller/produto.controller.js";
import {Router} from "express";

const produtoRouter = Router();

produtoRouter.post("/produtos", produtoController.createProdutoController);
produtoRouter.get("/produtos", produtoController.findAllProdutoController);
produtoRouter.get("/produtos/:id", produtoController.findProdutoByIdController);
produtoRouter.put("/produtos/:id", produtoController.updateProdutoController);

export default produtoRouter;