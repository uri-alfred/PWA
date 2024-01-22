//8
const promesaPrueba = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("La promesa se resolvio en 10s");
        }, 10000);
    });
}

const validaTiempoRespuesta = (tiempoLimite) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(`Se ha agotado el tiempo límite de ${tiempoLimite}s.`);
        }, tiempoLimite * 1000);
      })
}


async function promesaConTimeout(promesa, tiempoLimite) {
    try {
        const respuesta = await Promise.race([promesa, validaTiempoRespuesta(tiempoLimite)]);
        console.log(respuesta);
    } catch (data) {
        return console.log(data);
    }
}


promesaConTimeout(promesaPrueba(), 5);