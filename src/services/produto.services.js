import produtoRepository from "../repositories/produto.repository.js";
async function createProdutoService(novoProduto) {
    const produto = await produtoRepository.createProdutoRepository(novoProduto);
}

export default { 
    createProdutoService 
};

