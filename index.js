const productos = [
    {
        nombre: "hamburguesa simple",
        costo: 20,
        codigo: "h100"
    },
    {
        nombre: "hamburguesa doble",
        costo: 30,
        codigo: "h200"
    },
    {
        nombre: "papas fritas",
        costo: 8,
        codigo: "p100"
    },
    {
        nombre: "refresco personal",
        costo: 6,
        codigo: "r100"
    }
    ]

const mostrarMenu = () => {
    console.log(`CODIGO - NOMBRE PRODUCTO - COSTO`)
    //productos.forEach(producto => console.log(`${producto.codigo} - ${producto.nombre} - ${producto.costo}`))

    for(let producto of productos){
        console.log(`${producto.codigo} - ${producto.nombre} - ${producto.costo}`)
    }
}

