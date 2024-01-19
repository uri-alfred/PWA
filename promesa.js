//3
const cargarDatosDeAPI = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(`Error al cargar datos: ${error.mensaje}`)
            })
    })
}

const apiUrl = "https://fakestoreapi.com/products/1"
cargarDatosDeAPI(apiUrl)
    .then((data) => {
        console.log("Datos cargados: ", data);
    }).catch((error) => {
        console.error("Error: ", error);
    });

