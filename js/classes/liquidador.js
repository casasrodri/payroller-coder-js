
class Liquidador {
    // Esta clase se encarga de la lógica de liquidación de sueldo, analizando las novedades
    // y determinando cada concepto que se verá reflejado en el recibo del empleado.

    constructor(empleado) {
        this.empleado = empleado
        this.novedades = []
        this.lineasLiquidacion = []
        this.remunerativos = 0
        this.descuentos = 0
    }

    setNovedades(novedades) {
        // Asociación de novedades vigentes para este empleado.
        novedades.forEach(nov => {
            if (nov.empleado.legajo === this.empleado.legajo) {
                this.novedades.push(nov)
            }
        });
    }

    generarRecibo() {
        // Generación de líneas para cada recibo.
        this.sueldoBasico()
        this.antiguedad()
        this.licencias()
        this.horasExtras()
        this.aportes()

        return this.lineasLiquidacion
    }

    totales() {
        // Devuelve los totales del recibo
        return {
            remunerativos: this.importe(this.remunerativos),
            descuentos: this.importe(this.descuentos),
            neto: this.importe(this.remunerativos - this.descuentos)
        }
    }

    sueldoBasico() {
        const diasSueldo = 30
        const ausencias = this.contarAusencias()

        const diasLiquidados = diasSueldo - ausencias
        const importeBasico = (this.empleado.sueldo / diasSueldo) * diasLiquidados

        this.lineasLiquidacion.push(new LineaLiquidacion(
            'Sueldo básico', `${diasLiquidados} d.`, this.importe(importeBasico), '-'
        ))

        this.remunerativos += importeBasico
    }

    antiguedad() {
        const antiguedad = Math.floor(this.empleado.antiguedad())
        const importeAntig = this.empleado.sueldo * (antiguedad / 100)

        this.lineasLiquidacion.push(new LineaLiquidacion(
            'Antigüedad', `${antiguedad}%`, this.importe(importeAntig), '-'
        ))
        this.remunerativos += importeAntig
    }

    licencias() {
        const sueldoDiario = this.empleado.sueldo / 30
        const plus = sueldoDiario * 0.2

        this.novedades.forEach(nov => {
            if (nov.novedad === 'Licencias') {

                const importeLic = sueldoDiario * nov.cantidad
                this.lineasLiquidacion.push(new LineaLiquidacion(
                    `Licencia por ${nov.tipo.toLowerCase()}`, `${nov.cantidad}d.`, this.importe(importeLic), '-'
                ))
                this.remunerativos += importeLic

                // Se agrega un plus según Ley de Contrato de Trabajo para días de estudio o vacaciones
                switch (nov.tipo) {
                    case 'Estudio':
                    case 'Vacaciones':
                        const importePlus = plus * nov.cantidad
                        this.lineasLiquidacion.push(new LineaLiquidacion(
                            `Plus (${nov.tipo.toLowerCase()})`, `${nov.cantidad} d.`, this.importe(importePlus), '-'
                        ))
                        this.remunerativos += importePlus
                }
            }
        })
    }

    horasExtras() {
        const valorHora = this.empleado.sueldo / 200
        let valor

        this.novedades.forEach(nov => {
            if (nov.novedad === 'Horas extras') {
                valor = valorHora * (nov.tipo === '50%' ? 1.5 : 2) * nov.cantidad

                this.lineasLiquidacion.push(new LineaLiquidacion(
                    `Horas extras al ${nov.tipo}`, `${nov.cantidad} h.`,
                    this.importe(valor), '-'
                ))
                this.remunerativos += valor
            }
        })
    }

    aportes() {
        let porcentaje
        let importeAporte

        // Aporte sindical
        porcentaje = 2
        importeAporte = this.remunerativos * (porcentaje / 100)

        this.lineasLiquidacion.push(new LineaLiquidacion(
            'Aporte sindical', `${porcentaje}%`, '-', this.importe(importeAporte)
        ))
        this.descuentos += importeAporte


        // Jubilación
        porcentaje = 11
        importeAporte = this.remunerativos * (porcentaje / 100)

        this.lineasLiquidacion.push(new LineaLiquidacion(
            'Jubilación', `${porcentaje}%`, '-', this.importe(importeAporte)
        ))
        this.descuentos += importeAporte


        // Obra Social
        porcentaje = 3
        importeAporte = this.remunerativos * (porcentaje / 100)

        this.lineasLiquidacion.push(new LineaLiquidacion(
            'Obra Social', `${porcentaje}%`, '-', this.importe(importeAporte)
        ))
        this.descuentos += importeAporte


        // PAMI
        porcentaje = 3
        importeAporte = this.remunerativos * (porcentaje / 100)

        this.lineasLiquidacion.push(new LineaLiquidacion(
            'PAMI', `${porcentaje}%`, '-', this.importe(importeAporte)
        ))
        this.descuentos += importeAporte
    }

    contarAusencias() {
        // Devuelve la cantidad de dias que el empleado no asistió al trabajo.
        let ausencias = 0

        this.novedades.forEach(nov => {
            if (nov.novedad === 'Licencias') {
                ausencias += Number(nov.cantidad)
            }
        })

        return ausencias
    }

    importe(num) {
        // Formatea el importe como ##.###.###,## (sepMiles: punto, sepDecimal, coma)
        const redondeado = Math.round(num * 100) / 100
        const comaDecimal = redondeado.toString().replace('.', ',')
        const sepMiles = comaDecimal.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return sepMiles
    }
}


class LineaLiquidacion {
    // Representa cada linea de un recibo de sueldos.
    constructor(concepto, cantidad, remunerativo, descuento) {
        this.concepto = concepto
        this.cantidad = cantidad
        this.remunerativo = remunerativo
        this.descuento = descuento
    }
}


