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
            // reject(console.log("Error en función de sumar rapido"))
        }, 300);
    });
}

//Promise.race compite entre las promesas y devuelve larespuesta que se resuelva más rapido
Promise.race([sumarLento(5), sumarRapido(6)])
    .then(respuestas => {
        console.log(respuestas);
    }).catch(console.log)
