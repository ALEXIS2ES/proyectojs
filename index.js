const usuario = {
    nombre: "alexis",
    edad: 28,
    deuda: 0
}

const pedido = []

const mostrarMenu = () => {
    console.log(`CODIGO - NOMBRE PRODUCTO - COSTO`)
    // productos.forEach(producto => console.log(`${producto.codigo} - ${producto.nombre} - ${producto.costo}`))

    for(let producto of productos){
        console.log(`${producto.codigo} - ${producto.nombre} - ${producto.costo}`)
    }
}

const pedirProducto = cod => {
    // si solo es una linea funciona
    if (!cod)return "Ingrese Un Codigo valido"

    const productoEncontrado = productos.find(producto => producto.codigo === cod)
    if(!productoEncontrado) return "El producto no existe"

    pedido.push(productoEncontrado)
    console.log("Su producto ha sido agregado a su pedido. su pedido es: ")
    return verPedido
}

const verPedido = () => pedido
