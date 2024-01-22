//fetch 4

//Peticiones POST

let user = {
    name: 'Uriel Alfredo',
    age: 25
}

fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(resp => resp.json() )
.then(console.log)
.catch(error => {
    console.log('Error en la petición')
    console.log(error)
})