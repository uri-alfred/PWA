//7
const funcionUno = () => {
    return new Promise((resolve, reject) => {
        resolve("Función uno exitosa");
    });
}
const funcionDos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error en función 2");
        }, 1000);
    });
}

async function realizarOperacionesAsincronas() {
    try {
        const respuestas = await Promise.all([funcionUno(), funcionDos()]);
        console.log(respuestas);
    } catch (error) {
        return console.error(error);
    }
}


realizarOperacionesAsincronas();