let price1=document.getElementById('price_1').innerHTML;
let price_1=+price1;
console.log(price_1);

let price2=document.getElementById('price_2').innerHTML;
let price_2=+price2;
console.log(price_1);

let price3=document.getElementById('price_3').innerHTML;
let price_3=+price3;
console.log(price_3);

let price4=document.getElementById('price_4').innerHTML;
let price_4=+price4;
console.log(price_4);

let submit=price_1+price_2+price_3+price_4;
console.log(submit);

function discount(){
    const discount = submit - submit*0.2;
    document.querySelector("#submit").textContent = discount;
    const discount1=price_1-price_1*0.2;
    document.querySelector("#price_1").textContent = discount1;
    const discount2=price_2-price_2*0.2;
    document.querySelector("#price_2").textContent = discount2;
    const discount3=price_3-price_3*0.2;
    document.querySelector("#price_3").textContent = discount3;
    const discount4=price_4-price_4*0.2;
    document.querySelector("#price_4").textContent = discount4;
};
