    let articulos = [
        {nombre: "celulara", precio: 200},
        {nombre: "Televioson", precio: 600},
        {nombre: "Refri", precio: 1200},
        {nombre: "Cocina", precio: 300},
        {nombre: "lapto", precio: 2700},
        {nombre: "x-box", precio: 1000},
        {nombre: "camara", precio: 900}
    ]

    let articulosMenorPrecio = articulos.filter((art)=>art.precio <=500);
    let articlesAtName = articulos.map((art) => art.nombre)
    let articlesSearch = articulos.find((art) => art.nombre === "lapto" )
    
    articulos.forEach((art) => console.log(`| ${art.nombre}`))
    