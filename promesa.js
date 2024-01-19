//1
//Las promesas son objetos que representan la terminación o fracaso eventual de una operación o función asincrona
let promesaExitosa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa exitosa")
    }, 3000);
});

//then: se ejecuta cuando la promesa se resulve exitosamente
//catch: se ejecuta cuando la promesa es rechazada
promesaExitosa.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error(error);
})

