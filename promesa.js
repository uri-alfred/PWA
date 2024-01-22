//fetch 1

//Peticiones GET

fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.catch(json => console.log(json))