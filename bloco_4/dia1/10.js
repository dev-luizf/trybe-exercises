let custo = 10;
let custof = custo * 1.2;
let venda = 30;
let lucro = (venda - custof);

if (custo < 0 || venda < 0 || lucro < 0) {
    console.log("Erro");
}
else {
    console.log(lucro * 1000);
}

