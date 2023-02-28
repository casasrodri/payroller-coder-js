class Empleado {
    constructor(nombre, apellido, cargo, sueldo, fechaIngreso, foto, cantidadHijos) {
        this.nombre = nombre
        this.apellido = apellido
        this.cargo = cargo
        this.sueldo = sueldo
        this.fechaIngreso = new Date(fechaIngreso)
        this.foto = foto
        this.cantidadHijos = cantidadHijos
    }

    antiguedad() {
        const milisegEnAnios = 1000 * 60 * 60 * 24 * 365
        const hoy = new Date()
        return (hoy - this.fechaIngreso) / milisegEnAnios
    }
}