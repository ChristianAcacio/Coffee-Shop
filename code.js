
//Lista com todos os produtos e seus preços

const preços ={
    Croissant : 2.00,
    Brazilian_Coxinha: 2.00,
    Brazilian_Pastel: 2.00,
    Empada: 3.00,
    Natural_Sandwich: 1.00,
    Chiken_Pie: 2.50,
    Stuffed_Crepe: 3.00,
    Cheese_Pizza: 1.00,
    Pepperoni_Pizza: 1.50,


    strawberry_pie : 10.00,
    chocolate_brownie : 4.50,
    Brazilian_Pudim: 4.50,
    waffle : 6.00,
    donuts : 3.50,
    macaron : 1.00,
    cheesecake : 4.00,
    chocolate_cake : 4.00,
    strawberry_cake : 4.00,


    American_Coffee : 2.00,
    Latte_Coffee : 3.00,
    Macchiato_Coffee : 3.00,
    White_Chocolate : 3.50,
    Hot_Chocolate : 3.50,
    Bublle_Tea : 4.00,
    Strawberry_Milkshake : 5.50,
    Chocolate_Milkshake : 5.50,
    Caramel_Milkshake : 5.50,
};


let quantidade = {};


function add(produto){

    if(!quantidade[produto]){

        quantidade[produto] = 0;

    }

    quantidade[produto] += 1;
    let preço_produto = quantidade[produto] * preços[produto];
    let total = 0;
    for(const produto in quantidade){
        total += quantidade[produto] * preços[produto];
    }
    

    let jatem = document.getElementById(produto);

    if(jatem){

        jatem.innerHTML = `<div class=item_carrinho>
        <img src="img/comidas/${produto}.jpg" alt="${produto}" class = "imagem_carrinho">  
        <span class=texto_carrinho>${quantidade[produto]}x ${produto.replace("_", " ")} $${preço_produto.toFixed(2)}</span>
        </div>`;

    }
    else{

        let escolhas = document.getElementById("class");
        let novo_paragrafo = document.createElement("P");
        novo_paragrafo.id = produto;
        novo_paragrafo.innerHTML = `<div class=item_carrinho>
        <img src="img/comidas/${produto}.jpg" alt="${produto}" class = "imagem_carrinho">  
        <span class=texto_carrinho>${quantidade[produto]}x ${produto.replace("_", " ")} $${preço_produto.toFixed(2)}</span>
        </div>`; 
        escolhas.appendChild(novo_paragrafo);

    }

    document.getElementById("total").textContent = "Total: $" + total.toFixed(2);

    if(total !== 0){
        let finalizar_compra = document.getElementById("finalizar_pagamento");

        if(!finalizar_compra.querySelector("button")){
            let novo_botao = document.createElement("button");
            novo_botao.textContent = "Finalizar Compra";
            novo_botao.classList.add("botao_pagamento")
            finalizar_compra.appendChild(novo_botao);
        }

    }
    
}