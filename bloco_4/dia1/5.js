let ang1 = 30;
let ang2 = 30;
let ang3 = 120;

let isAng = 0;
let sum = ang1 + ang2 + ang3;

if (ang1 > 0 && ang2 > 0 && ang3 > 0) {
    isAng = true;
    if (sum == 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("Não é um angulo válido");;
}