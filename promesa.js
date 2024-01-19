//2
let promesaConError = new Promise((resolve, reject) => {
    //simula un error durante la operación
    reject("Algo salió mal...")
});

promesaConError.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error(error);
})

