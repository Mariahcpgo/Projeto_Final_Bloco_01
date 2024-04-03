import leia = require('readline-sync')

export function main() {

let opcao: number;

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
        break;
        
      case 2:
        console.log("\n\nListar Produto pelo ID\n\n");
        break;
        
      case 3:
        console.log("\n\nCadastrar Produto\n\n");
        break;

      case 4:
        console.log("\n\nAtualizar Produto\n\n");
        break;

      case 5:
        console.log("\n\nDeletar Produto\n\n");
        break;

        default:
            console.log("\nOpcao invalida!\n");
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

main();