//fetch 7

// https://fakestoreapi.com/products/1

fetch('https://pokeapi.co/api/v2/pokemon-form/100000')
    .then(resp => {
        if (resp.ok) {
            return resp.json()
        } else {
            throw new Error('No existe producto')
        }
    })
    .then(console.log)
    .catch(err => {
        console.log('Error en la petición')
        console.log(err)
    })