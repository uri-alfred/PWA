//fetch 1

//Peticiones GET

fetch('https://wikipedia.org')
    .then(res => res.text() )
    .then(html => {
        document.open();
        document.write(html);
        document.close();
    })