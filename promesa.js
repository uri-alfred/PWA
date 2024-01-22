//9
const esperarNVeces = (nVeces) => {
    return new Promise((resolve, reject) => {
        for (let i = 1; i <= nVeces; i++) {
            setTimeout(() => {
                console.log(`${i} segundos...`);
                if (i == nVeces) {
                    resolve(`¡He esperado ${nVeces} veces!`);
                }
            }, 1000);
        }
    });
}

esperarNVeces(3).then(respuesta => {
    console.log(respuesta)
}).catch(console.log)