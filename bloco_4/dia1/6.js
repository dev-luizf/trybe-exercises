let peca = "PEÃO";

switch (peca.toLowerCase()) {
    case "rei":
        console.log("Rei -> uma casa para todos os lados");
        break;
    case "rainha":
        console.log("Rainha -> move nas diagonais, verticais e horizontais");
        break;
    case "bispo":
        console.log("Bispo -> move nas diagonais");
        break;
    case "torre":
        console.log("Torre -> move na horizontal e vertical");
        break;
    case "peão":
        console.log("Peão -> move uma casa pra frente, mas o primeiro movimento podem ser duas casas");
        break;
    case "cavalo":
        console.log("Cavalo -> move em L");
        break;
    default:
        console.log("Peça inválida");
        break;
};