//fetch 8

fetch('not-found.html')
    .then(resp => resp.text())
    .then(html => {
        document.querySelector('body').innerHTML = html
    })
    .catch(err => {
        console.log('Error en la petición')
        console.log(err)
    })
