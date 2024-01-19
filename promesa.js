//4
const ejecutarConTimeout = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Operación completada después de ${ms} milisegundos`);
        }, ms);
    });
}

const tiempoLimite = 7000;
ejecutarConTimeout(tiempoLimite)
    .then(resultado => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error("Error: ", error);
    });

