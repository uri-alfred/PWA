//fetch 6

fetch('https://fakestoreapi.com/products/1')
    .then(resp => resp.json())
    .then(data => console.log(data))