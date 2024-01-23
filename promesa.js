//fetch 5

//Fetch archivos locales

//Almacena de manera local una imagen dentro de este
//proyecto en la carpeta img realiza una solicitud fech de esta imagen
//y muestrala en el navegador

fetch("./img/archangel.png")
    .then(resp => {
        console.log(resp);
        return resp.url
    })
    .then(img => {
        console.log(img)
        let imagen = document.createElement("img");
        imagen.src = img;
        imagen.style = "width: 600px"
        document.body.appendChild(imagen);
    })
    .catch(error => {
        console.log('Error en la solicitud de la imagen')
        console.log(error)
    })