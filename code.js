


const preços ={
     strawberry_pie : 12.00,
     chocolate_brownie : 5.50,
     brazilian_pudim : 5.50,
     waffle : 7.00,
     donuts : 6.50,
     macaron : 3.00,
     cheesecake : 7.00,
     chocolate_cake : 7.00,
     strawberry_cake : 7.00
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