import { Produto } from "../Src/Model/Produto";
import { Repository } from "../Repository/Repository";
import { Eletronico } from "../Src/Model/Eletronico";

export class Controller implements Repository {

private listaProdutos: Array<Produto> = new Array<Produto>();

public id: number = 0;

listarTodos(): void {
    for (let produto of this.listaProdutos){
        produto.visualizar();
    }
}

procurarPorId(id: number): void {
    let buscaProduto = this.buscarNoArray(id);

    if(buscaProduto !== null)
    buscaProduto.visualizar()

    else 
    console.log("Produto nao encontrado!")
}

cadastrar(produto: Produto): void {
    this.listaProdutos.push(produto);
    console.log("Produto Adicionado!")
}

atualizar(produto: Produto): void {
    let buscaProduto = this.buscarNoArray(produto.id);

    if(buscaProduto !== null){
        this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
        console.log(`O produto ID ${produto.id} foi atualizado!`)
    } else {
        console.log("Produto não encontrado!")
    }
}

deletar(id: number): void {
    let buscaProduto = this.buscarNoArray(id);

    if(buscaProduto !== null){
        this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1)
        console.log(`O produto ID ${this.id} foi excluido!`)
    } else {
        console.log("Produto nao encontrado!")
    }
}

public gerarId(): number {
    return ++ this.id
}

public buscarNoArray(id: number): Produto | null {
    for (let produto of this.listaProdutos) {
        if (produto.id == id)
        return produto;
    }

    return null;
}

}
