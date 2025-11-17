import express from "express";
import produtoRouters from "./src/routes/produto.routes.js";

const app = express();

app.use(express.json());
app.use(produtoRouters);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000...");
});