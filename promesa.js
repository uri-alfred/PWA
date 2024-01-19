//5
const sumarLento = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero + 1);
            // reject(console.log("Error en función de sumar lento"))
        }, 800);
    });
}
const sumarRapido = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero + 1);
        }, 300);
    });
}

//siempre ejecuta la primer función del arreglo
Promise.all([sumarRapido(6), sumarLento(5), true, "Hola mundo"])
    .then(respuestas => {
        console.log(respuestas);
    }).catch(console.log)
