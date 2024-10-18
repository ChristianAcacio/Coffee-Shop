
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


function add(produto){  
    
    valor += preços[produto];
    console.log(valor);

}