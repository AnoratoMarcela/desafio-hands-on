    //ctrl + k + c e crtl + k + u


// Carrinho de compras como um array 


function venda(){

const produtosDisponiveis = [
        { nome: "Camisa", preco: 50.00 },
        { nome: "Calça", preco: 100.00 },
        { nome: "Sapato", preco: 150.00 },
        { nome: "Boné", preco: 25.00 }
    ]; 


let carrinho = [];
let preco = [];
let unid = [];
let continuar = true

while (continuar){
    let produto = parseFloat(prompt(`Produtos disponiveis na loja\n
        1 - Camisa - R$ 50,00
        2 - Calça -  R$ 100,00
        3 - Sapato - R$ 150,00
        4 - Boné -   R$ 25,00`));

    switch (produto){
    case 1:  
        carrinho.push(produtosDisponiveis[0])
        preco.push(50)
        unid = parseInt(prompt('Quantidade: '))
         break;
    case 2:
        carrinho.push(produtosDisponiveis[1])
        preco.push(100)
        unid = parseInt(prompt('Quantidade: '))
        break;
    case 3:
        carrinho.push(produtosDisponiveis[2])
        preco.push(150)
        unid = parseInt(prompt('Quantidade: '))
        break;
    case 4:
        carrinho.push(produtosDisponiveis[3])
        preco.push(25)
        unid = parseInt(prompt('Quantidade: '))
        break;
    default:
        alert("Digite uma opção válida")
        continue;

}}

const resposta = parseInt(prompt('Deseja adiocionar mais itens ao carrinho?\n 1 - Sim \n 2 - Não'))
    let carrinhoString = carrinho.map(function(produto){
        return `${produto.nome} - ${produto.preco} x ${unid} = R$ ${preco}})`})
    oin('\n')


}
    
venda()
















