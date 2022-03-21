import Impuestos from "./Impuestos.js"
import Cliente from "./Cliente.js"

function main() {

    // Creacion de la variable impuesto
    const imp1 = new Impuestos
    imp1.setMontoBrutoAnual(1000000)
    imp1.setDeducciones(200000)

    // Aqui se muestran los datos del objeto Impuesto
    console.log("MOSTRANDO LOS DATOS DEL OBJETO IMPUESTO")
    console.log(`El monto bruto anual es: ${imp1.getMontoBrutoAnual()}`)
    console.log(`Las deducciones son: ${imp1.getDeducciones()}`)

    // Creando el objeto Cliente
    const clien1 = new Cliente("Pablo", imp1)

    // Imprimiendo los datos del objeto Cliente en la consola
    console.log("MOSTRANDO LOS DATOS DEL OBJETO CLIENTE")
    console.log(`El nombre del cliente es: ${clien1.getNombre()}`)
    console.log(`El total de sus impuestos a pagar es de: ${clien1.calcularImpuesto()}`)
}

main()