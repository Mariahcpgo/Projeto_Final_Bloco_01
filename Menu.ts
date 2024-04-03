import leia = require('readline-sync')
import { Produto } from './Src/Model/Produto';
import { Eletronico } from './Src/Model/Eletronico';
import { Controller } from './Controller/Controller';

export function main() {

let opcao, id, preco: number;
let nome, tipo: string;
let marca: string;

const controller: Controller = new Controller();

controller.cadastrar(new Eletronico(controller.gerarId(), "Iphone 15", "marca", 5000, "Iphone"))

while(true) {
 
    console.log("*****************************************");
    console.log("                                         ");
    console.log("         E-COMMERCE DA MARIAH            ");
    console.log("                                         ");
    console.log("*****************************************");
    console.log("                                         ");
    console.log("    1. Listar todos os Produtos          ");
    console.log("    2. Listar Produto pelo ID            ");
    console.log("    3. Cadastrar Produto                 ");
    console.log("    4. Atualizar Produto                 ");
    console.log("    5. Deletar Produto                   ");
    console.log("    9. Sair                              ");
    console.log("                                         ");
    console.log("  ***************************************");
    console.log("                                         ");

    console.log("Entre com a opcao desejada: ");
    opcao = leia.questionInt("");

    if(opcao == 0) {
        console.log("\nAgradecemos sua visita!");
        about();
        process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("\n\nListar todos os Produtos: \n\n");
        controller.listarTodos();

        KeyPress();
        break;
        
      case 2:
        console.log("\n\nListar Produto pelo ID: \n\n");
        id = leia.questionInt("Digite o ID do Produto: ");
        controller.procurarPorId(id);
          
        KeyPress();
        break;
        
      case 3:
        console.log("\n\nCadastrar Produto\n\n");
        nome = leia.question("Digite o nome do produto: ")
        tipo = leia.question("Digite o tipo de produto: ")
        preco = leia.questionFloat("Digite o preco do produto: ")
        controller.cadastrar(new Eletronico(controller.gerarId(), nome, tipo, preco, "Marca"));

        KeyPress();
        break;

      case 4:
        console.log("\n\nAtualizar Produto\n\n");
        id = leia.questionInt("Digite o ID do produto: ")

        let produto = controller.buscarNoArray(id);

        if(produto !== null) {
          nome = leia.question("Digite o nome do produto: ");
          tipo = produto.tipo;
          preco = leia.questionFloat("Digite o preco do produto: ");
          controller.atualizar(new Eletronico(id, nome, tipo, preco, "Marca"))
        } else {
          console.log("Produto nao encontrado!")
        }

        KeyPress();
        break;

      case 5:
        console.log("\n\nDeletar Produto\n\n");
        id = leia.questionInt("Digite o ID do produto: ");
        controller.deletar(id);

        KeyPress();
        break;

        default:
            console.log("\nOpcao invalida!\n");
            KeyPress();
            break;

    }
}}

export function about(): void {
    console.log("\n*********************************************");
    console.log("\nProjeto desenvolvido por: Mariah Caroline    ");
    console.log("\nGeneration Brasil - generation@generation.org");
    console.log("\ngithub.com/projeto_final_bloco_01            ");
    console.log("\n*********************************************");
}

function KeyPress(): void {
    console.log("\nPrecione ENTER para continuar")
    leia.prompt();

}

main();