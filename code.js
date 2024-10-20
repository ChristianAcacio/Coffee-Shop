


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



let valor = 0;
let x = 0;


function add(produto){  

    valor += preços[produto];
    x += 1;


    let escolhas = document.getElementById("class");
    let novoparagrafo = document.createElement("p");
    let texto = document.createTextNode (produto); 

    novoparagrafo.appendChild(texto);
    escolhas.appendChild(novoparagrafo);
    




    document.getElementById("total").textContent = "Total: $" + valor.toFixed(2);

}