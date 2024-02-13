// Uriel Alfredo Botello Reséndiz
//fetch 9

fetch('https://fakestoreapi.com/products')
    .then(resp => resp.json())
    .then(productos => {
        console.log(productos)
        let textContenido = "<h1> Productos: </h1> </br>";
        productos.forEach(prod => {
            textContenido += prod.id + " - " + prod.title + "</br>";
        });
        document.querySelector('body').innerHTML = textContenido;
    })
    .catch(err => {
        fetch('not-found.html')
            .then(resp => resp.text())
            .then(html => {
                document.querySelector('body').innerHTML = html
            })
            .catch(err => {
                console.log(err)
            })
        console.log('No se ha podido completar la solicitud')
    })