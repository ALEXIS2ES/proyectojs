/**
 * logica para crear pedidos y cobrar los pedidos del usuario
 */
const usuario = {
    nombre: "alexis",
    edad: 30,
    deuda: 0
}

let pedido = []
let costoPedido = 0
//lista todos los productos del menu en un formato amigable
const mostrarMenu = () => {
    console.log(`CODIGO - NOMBRE PRODUCTO - COSTO`)
    for(let producto of productos){
        console.log(`${producto.codigo} - ${producto.nombre} - ${producto.costo}`)
    }
}

const pedirProducto = cod => {
    if (!cod)return "Ingrese Un Codigo valido"

    const productoEncontrado = productos.find(producto => producto.codigo === cod)
    if(!productoEncontrado) return "El producto no existe"

    pedido.push(productoEncontrado)
    console.log("Su producto ha sido agregado a su pedido. su pedido es: ")
    return verPedido
}

const verPedido = () => pedido

const calcularCosto = () =>{
    let costo = 0
    for (producto of pedido){
        costo += producto.costo
    }
    costoPedido = costo
    return costoPedido
}

const finalizarPedido = () => {
    calcularCosto()
    usuario.deuda = costoPedido

    pedido = []
    costoPedido = 0

    return `${usuario.nombre}, Deves pagar ${usuario.deuda} dolares.`
}
//funcion que permite pagar todo un pedido y entrega cambio si es necesario
const pagarPedido = montoEntregado => {
    if(typeof montoEntregado === "number"){
        if (montoEntregado < usuario.deuda){
            return `No te alcansa para pagar tu pedido.`
        }else if(montoEntregado === usuario.deuda){
            usuario.deuda = 0
            return `Tu pedido ha sido pagado.`
        }else{
            console.log(`Tu pedido ha sido pagado y tu cambio es de ${montoEntregado -usuario.deuda}.`)
            usuario.deuda = 0
            return  `deuda pagada`
        }
    }else{
        return "dato ingresado de forma erronea"
    }
    
}