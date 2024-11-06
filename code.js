


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
     brazilian_pudim : 4.50,
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



let total = 0;
let quantidade = {};




function add(produto){  

    if(!quantidade[produto]){
        quantidade[produto] = 0
    }
    quantidade[produto] +=1
    total += preços[produto];


    let jatem = document.getElementById(produto);
    if(jatem){
        let preço_produto = quantidade[produto] * preços[produto];
        jatem.textContent = `${quantidade[produto]}x ${produto.replace("_", " ")}  $${preço_produto.toFixed(2)}`;
    }
    else{

        let escolhas = document.getElementById("class");
        let novoparagrafo = document.createElement("p");
        novoparagrafo.id = produto;

        let preço_produto = quantidade[produto] * preços[produto];
        novoparagrafo.textContent = `${quantidade[produto]}x ${produto.replace("_", " ")} ${preço_produto.toFixed(2)}`
    
        escolhas.appendChild(novoparagrafo);


    }

    document.getElementById("total").textContent = "Total: $" + total.toFixed(2);
}






/*
let remover = document.createElement("button");
remover.textContent = "X";
remover.onclick = function (){
    apagar(produto);
}


function apagar(produto){
    let jatem = document.getElementById(produto);
    if(jatem){
        total -= quantidade[produto] * preços[produto];
        delete quantidade[produto];
        jatem.remove();
        document.getElementById("total").textContent = "Total: $" + total.toFixed(2);
    }
}
*/