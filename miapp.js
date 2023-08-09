//Esta idea es de una app que funcione de forma interna, que te deje realizar compra de dolares o depositar para ahorrar.


let IngresoExitoso = false
let nombre = ""

//consulta de ingreso de datos correcto


while (IngresoExitoso != true) {
    let nombre = prompt("Ingrese Su Nombre:")
    let apellido = prompt("Ingrese su Apellido")

    if (nombre != "" && apellido != "") {
        IngresoExitoso = true
        alert("Bienvenido " + nombre + " " + apellido + " " + " a la pre entrega de mi primer App en JS!")
    }
    else {
        alert("Por Favor ingrese su Nombre y Apellido")
    }
}

alert("El dolar Actualmente se cotiza en $590 Pesos Argentinos")

function descripcion_compra(Compro) {
    return "Usted ingreso la cantidad de " + " " + "$" + Compro + " "+ "Dolares"
}

let DetalleCompra = ""
let TotalCompra = 0
let FinalizarCompra = ""
let Verificar = false
let Compro = 0

do {

    let Consulta = prompt('Para comprar dólares escriba la palabra "comprar"')
    if (Consulta == "comprar" || Consulta == "COMPRAR") {
        Verificar = true
        Compro = Number(prompt("Ingrese el monto en Dolares que desea comprar"))
    }

    DetalleCompra = DetalleCompra + descripcion_compra(Compro) + "\n"
    TotalCompra = TotalCompra + 590 * Compro

    if (Compro >= 201) {
        alert("Recuerde que solo puede comprar un máximo de $200 Dólares.")
        alert("Por favor vuelva a ingresar un monto valido")
        
    } else if (Compro = 0) {
        alert("Debe ingresar un valor")
        
    } else if (Compro >= 150 && Compro <= 200) {
        alert("Ups! El dolar acaba de aumentar su valor")
        alert("Por Favor vuelva a ingresar el valor para recalcular")

    } else if (Compro >= 49 && Compro <= 149) {
        alert("Perfecto se esta calculando en Pesos Argentinos ")
       
    } else if (Compro >= 1 && Compro <= 50) {
        alert("Lo siento para tan poco ingreso, mejor ni calcular")
    }
    alert(DetalleCompra + "Usted ingreso la cantidad de: $" + " "+ TotalCompra)

    FinalizarCompra = prompt('Para Finalizar y salir de la Compra, ingrese "salir"')
}
while (FinalizarCompra != "salir")

alert("Ahora tambien podes hacer un Ahorro")

//Ingresar para AHORRAR
let VerificarAhorros = false

let Ahorros = prompt('Si desea realizar un Ahorro en Pesos Argentinos, ingrese "si" o "no"')

/*if (Ahorros != " ") {
    VerificarAhorros = true
    //alert("Lo siento para tan poco ingreso, mejor ni ahorrar")
    alert("Verificando Datos")
}*/
switch (Ahorros) {
    case "si":
        alert("La AFIP quiere saber de donde proviene ese ahorro!")
        break;

    case "no":
        alert("Si, me lo imaginaba! Ahorros en Argentina?")
        break;

    default:
        alert("Adios!")
        break;
}


alert("Muchas gracias por utilizar la aplicacion de Compra o Ahorros")




