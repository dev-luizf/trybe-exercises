let salBruto = 3000;
let menosINSS = null;
let aIR = null;
let menosIR = null;
let salLiq = null;

if (salBruto <= 1556.94) {
    menosINSS = salBruto * 0.92 ;

}
else if (salBruto >= 1556.95 && salBruto <= 2594.92) {
    menosINSS = salBruto * 0.91 ;

}
else if (salBruto >= 2594.93 && salBruto <= 5189.82) {
    menosINSS = salBruto * 0.89 ;

}
else {
    menosINSS = salBruto - 570.88 ;
}

if (menosINSS <= 1903.98){
    salLiq = menosINSS;
}
else if (menosINSS >= 1903.99 && menosINSS <= 2826.65) {
    aIR = menosINSS * 0.075;
    menosIR = aIR - 142.80;
}
else if (menosINSS >= 2826.66 && menosINSS <= 3751.05) {
    aIR = menosINSS * 0.15;
    menosIR = aIR - 354.80;
}
else if (menosINSS >= 3751.06 && menosINSS <= 4664.68) {
    aIR = menosINSS * 0.225;
    menosIR = aIR - 636.13;
}
else {
    aIR = menosINSS * 0.275;
    menosIR = aIR - 869.36;
}

salLiq = menosINSS - menosIR;
console.log(salLiq);

