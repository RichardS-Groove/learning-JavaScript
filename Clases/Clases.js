class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    nombreCompleto() {
        return this._nombre + ' ' + this._apellido;
    }


    toString() {
        return this._nombre + ' ' + this._apellido;
    }
}


class Empleado extends Persona {

    constructor(nombre, apellido, departamento) {
        super(nombre, apellido); // Llamar al constructor de la clase padre;
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }

    //Sobreescritura de metodo

    nombreCompleto() {
        return super.nombreCompleto() + ', ' + this._departamento;
    }

    toString() {
        return this.nombreCompleto();
    }

}


let persona1 = new Persona('RichardS', 'Campos');
console.log(persona1);

let empleado = new Empleado('Miguel', 'Campos', 'Sistemas');

console.log(empleado);

console.log(empleado.nombreCompleto());

console.log(empleado.toString());