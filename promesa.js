//9
const esperarNVeces = (nVeces) => {
    return new Promise((resolve, reject) => {
        let contador = 1;
        const intervalo = setInterval(() => {
            if (contador <= nVeces) {
                console.log(`${contador} segundos...`);
                contador++;
            } else {
                clearInterval(intervalo);
                resolve(`¡He esperado ${nVeces} veces!`);
            }
        }, 1000);
    });
}

esperarNVeces(3).then(respuesta => {
    console.log(respuesta)
}).catch(console.log)