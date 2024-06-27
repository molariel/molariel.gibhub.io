// Herencia multinivel

class Motores {
    // constructor
    constructor(serial,fabricante){
        this._serial = serial;
        this.fabricante = fabricante;
    }

    get serial(){
        return this._serial;
    }
    //Metodo
    datosMotor(){
        return `El numero de serie es:${this._serial} y el fabricante es la empresa: ${this.fabricante}`;
    }

}

// Clase Elctricos herede de la clase Motores
class Electricos extends Motores {
    constructor(serial, fabricante,potencia, corriente){
        super (serial, fabricante); // LLamar al contructor de la clase Motores
        this.potencia = potencia;
        this.corriente = corriente;
    }

    tipoCorriente(){
        return `El tipo de corriente del motor ${this.serial} es:${this.corriente}`;
    }
}

class CC extends Electricos {
    constructor(serial, fabricante, potencia, corriente, voltaje, tipo){
        super (serial, fabricante, potencia, corriente);
        this.voltaje = voltaje;
        this.tipo = tipo;

        }

    tipoVoltaje(){
            return `El voltaje del motor :${this.serial} es:${this.voltaje}`;
    }
}

class CA extends Electricos {
    constructor(serial, fabricante, potencia, corriente, fases, frecuencia){
        super (serial, fabricante, potencia, corriente);
        this.fases = fases;
        this.frecuencia = frecuencia;
    }
    tipoFase(){
        return `El tipo de fase del motor :${this.serial} es:${this.fases}`;
}


}

// instanciar las clases CC y CA
let motorCC = new CC('133DGH', 'GE', '2000W', 'CC', '220CC', 'Shunt');
let motorCA  = new CA('7566DGD', 'ABB', '2HP', 'CA', 'Monofasico', '50Hz');
let motorCAM = new CA('1234567D', 'ABB', '3P', 'CA', 'Multifasico', '120Hz');

// ejecutar metodos de los objetos motorCC y motorCA
console.log(motorCC);
console.log(motorCC.datosMotor());
console.log(motorCC.tipoCorriente());
console.log(motorCC.tipoVoltaje());

console.log(motorCA);
console.log(motorCA.datosMotor());
console.log(motorCA.tipoCorriente());
console.log(motorCA.tipoFase());

console.log(motorCAM);
console.log(motorCAM.datosMotor());
console.log(motorCAM.tipoCorriente());
console.log(motorCAM.tipoFase());
