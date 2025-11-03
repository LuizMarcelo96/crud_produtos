import db from "../config/database.js";

db.run(`
    create table if not exists produto (
    id \integer primary key autoincrement,
    nome text not null unique,
    valor texxt not null,
    tipo text not null
    )
    `)

function createProdutoRepository(novoProduto) {
    return new Promise((resolve, reject) => {
        const {
            nome,
            valor,
            tipo
        } = novoProduto;
        db.run(
            `INSERT INTO produto (nome, valor, tipo)
            VALUES (?, ?, ?)`,
            [nome, valor, tipo],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({novoProduto});
                }
            }
        );
    });
}
export default{createProdutoRepository}
