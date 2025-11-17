import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS produto (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL UNIQUE,
        valor TEXT NOT NULL,
        tipo TEXT NOT NULL
    )
`);

function createProdutoRepository(novoProduto) {
    return new Promise((resolve, reject) => {

        const {
            nome,      
            valor,
            tipo       
        } = novoProduto;

        db.run(
            `INSERT INTO produto(nome, valor, tipo)
            VALUES(?,?,?)`,
            [nome,valor,tipo],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({
                        id: this.lastID,
                        novoProduto
                    });
                }
            }
        );

    });

}

function findAllProdutoRepository() {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT * FROM produto`,
            [],
            (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            }
        );
    });
}

function findProdutoByIdRepository(id) {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT 
                * 
            FROM produto
            WHERE id = ?`,
            [id],
            (error, row) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(row);
                }
            }
        );
    });
}

function updateProdutoRepository(id, produto) {
    return new Promise((resolve, reject) => {

        const {
            nome,
            valor,
            tipo
        } = produto;

        db.run(
            `UPDATE produto
            SET nome = ?,      
                valor = ?,
                tipo = ?
            WHERE id = ?`,
            [nome, valor, tipo, id],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({
                        id,
                        ...produto
                    });
                }
            }
        )
    });
}

export default {
    createProdutoRepository,
    findAllProdutoRepository,
    findProdutoByIdRepository,
    updateProdutoRepository
}