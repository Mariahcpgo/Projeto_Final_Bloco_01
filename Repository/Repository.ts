import { Produto } from "../Src/Model/Produto";

export interface Repository{

    listarTodos(): void;
    procurarPorId(id: number): void;
    cadastrar(produto: Produto): void;
    atualizar(produto: Produto): void;
    deletar(produto: Produto): void;

}