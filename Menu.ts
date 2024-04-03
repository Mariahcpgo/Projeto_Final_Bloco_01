import leia = require('readline-sync')
import { Produto } from './Src/Model/Produto';
import { Eletronico } from './Src/Model/Eletronico';

export function main() {

let opcao: number;

const tenis: Eletronico = new Eletronico(1, "Iphone 14", "Celular", 5000, "Iphone")
tenis.visualizar();

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
        console.log("\n\nListar todos os Produtos\n\n");
        KeyPress();
        break;
        
      case 2:
        console.log("\n\nListar Produto pelo ID\n\n");
        KeyPress();
        break;
        
      case 3:
        console.log("\n\nCadastrar Produto\n\n");
        KeyPress();
        break;

      case 4:
        console.log("\n\nAtualizar Produto\n\n");
        KeyPress();
        break;

      case 5:
        console.log("\n\nDeletar Produto\n\n");
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