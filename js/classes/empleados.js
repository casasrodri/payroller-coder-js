class Empleado {
    constructor(legajo, nombre, apellido, cargo, sueldo, fechaIngreso, foto) {
        this.legajo = legajo
        this.nombre = nombre
        this.apellido = apellido
        this.cargo = cargo
        this.sueldo = sueldo
        this.fechaIngreso = new Date(fechaIngreso)
        this.foto = foto
    }

    antiguedad() {
        const milisegEnAnios = 1000 * 60 * 60 * 24 * 365
        const hoy = new Date()
        return (hoy - this.fechaIngreso) / milisegEnAnios
    }
}