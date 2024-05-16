
export default function esUnCuil(campo) {
    const cuil = campo.value.replace(/\-/g, "");
    
    if (!tieneNumerosRepetidos(cuil)) {
        if (validarPrimerosDigitosCuil(cuil) && validarDigitoVerificador(cuil)) {
        /* console.log('Valores repetidos'); */
    }else{
        campo.setCustomValidity("No es un código válido")
           /*  console.log('cuil valido'); */
        }
    }else{
        /* console.log('cuil no existe'); */
        campo.setCustomValidity("valores repetidos")
    }
}

function tieneNumerosRepetidos(cuil) {
    const numerosRepetidos = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
    ];
    return numerosRepetidos.includes(cuil);
}

function validarPrimerosDigitosCuil(cuil) {
    let primerosDigitos = Number(cuil.slice(0,2)); //* o substr
    let digitosValidos = [20,23,24,27,30,33,34];

    return digitosValidos.includes(primerosDigitos);//* verificar los primeros dos digitos
}

function validarDigitoVerificador(cuil) {
    let digitoVerificador = Number(cuil.slice(-1));//* o substring

    let digitos = cuil.substr(0, 10).split("").map(Number);

    let acumulado = 0;
    const factores = [5,4,3,2,7,6,5,4,3,2];

    for (let i = 0; i < digitos.length; i++) {
        acumulado += digitos[i] * factores[i];
    }
    let validador = 11 - (acumulado % 11);

    if (validador === 11) {
        validador = 0;
    } 

    return digitoVerificador === validador;
}