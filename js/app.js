let totalGeral;
limpar();

function adicionar() {
    //recuperar valores: nome do produto, quantidade, valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = parseInt(produto.split('R$')[1]);
    let quantidade = document.getElementById('quantidade').value;

    //calcular o preço, subtotal
    let preco = quantidade * valorProduto;

    //adicionar produto no carrinho
    let carrinho = document.getElementById('lista-produtos');
    if (quantidade <= 0) {
        alert ('Você precisa informar uma quantidade maior que 0 para adicionar um produto ao carrinho. Verifique!');
    } else {
            carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`
    }


    //atualizar o valor total do carrinho
    totalGeral = totalGeral + preco;
    let textoValorTotal = document.getElementById('valor-total');
    textoValorTotal.textContent = `R$${totalGeral}`;

    //limpar caixa de quantidade
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
    totalGeral = 0;
}