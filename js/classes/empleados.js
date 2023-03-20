class Empleado {
    constructor({nombre, apellido, dni, telefono, fecha_nacim, legajo, cargo, sueldo, modalidad, fecha_ing}) {
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.telefono = telefono
        this.fecha_nacim = new Date(fecha_nacim)
        this.legajo = legajo
        this.cargo = cargo
        this.sueldo = sueldo
        this.modalidad = modalidad
        this.fecha_ing = new Date(fecha_ing)
        this.foto = legajo
    }

    antiguedad() {
        const milisegEnAnios = 1000 * 60 * 60 * 24 * 365
        const hoy = new Date()
        return (hoy - this.fecha_ing) / milisegEnAnios
    }

    edad() {
        const milisegEnAnios = 1000 * 60 * 60 * 24 * 365
        const hoy = new Date()
        return (hoy - this.fecha_nacim) / milisegEnAnios
    }
}