class Novedad {
    // Representa una novedad a incluirse en la liquidación de haberes de un empleado.
    constructor(legajo, novedad, tipo, cantidad) {
        this.empleado = buscarEmpleado(legajo)
        this.novedad = novedad
        this.tipo = tipo
        this.cantidad = cantidad
    }

    toString() {
        return `Empleado: ${this.empleado.nombre} ${this.empleado.apellido}, Novedad: ${this.novedad}, Tipo: ${this.tipo}, Cantidad: ${this.cantidad}`
    }
}