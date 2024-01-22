//fetch 1

//Peticiones GET

fetch('https://www.microsoft.com/es-mx')
    .then(res => res.text() )
    .then(html => {
        document.open();
        document.write(html);
        document.close();
    })