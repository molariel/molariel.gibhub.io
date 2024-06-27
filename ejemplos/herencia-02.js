/*  refactorizando: mejorando el codigo
     Para refactorizar este código y eliminar la repetición de atributos y métodos comunes,
     podemos usar la herencia.
*/

/*
Clase Vehiculo: Se introduce como una clase base que define los atributos
                 comunes (marca, modelo, color, precio) y un método común
                 mostrarInformacion para mostrar la información básica del vehículo.

*/

// Definición de una clase base Vehiculo con los atributos y metodos comunes
class Vehiculo {
    constructor(patente,marca, modelo, color, precio) {
      this.patente = patente;
      this.marca = marca;
      this.modelo = modelo;
      this.color = color;
      this.precio = precio;
    }
  
    mostrarInformacion() {
      console.log(`${this.constructor.name} ${this.marca} ${this.modelo}, color ${this.color}, precio: ${this.precio}`);
    }
  }
  
/*
Clases Auto, Bus, Moto: Estas clases heredan de Vehiculo usando super() para
 inicializar los atributos comunes. Además, cada una sobrescribe el método 
 mostrarInformacion según sea necesario para mostrar información adicional 
 específica (capacidadPasajeros para Bus y cilindrada para Moto).

*/
  // Clase Auto hereda de Vehiculo, Clase Auto exitende la clase Vehiculo
  class Auto extends Vehiculo {
    constructor(patente,marca, modelo, color, precio) {
      super(patente,marca, modelo, color, precio); // llamar al constructor de Vehiculo
    }
  }
  
  // Clase Bus hereda de Vehiculo
  class Bus extends Vehiculo {
    constructor(patente,marca, modelo, color, precio, capacidadPasajeros) {
      super(patente,marca, modelo, color, precio); // llamar al constructor de Vehiculo
      this.capacidadPasajeros = capacidadPasajeros;
    }
  
/*    
    // Sobrescribir método mostrarInformacion para incluir capacidad de pasajeros
    mostrarInformacion() {
      console.log(`${this.constructor.name} ${this.marca} ${this.modelo}, color ${this.color}, precio: ${this.precio}, capacidad: ${this.capacidadPasajeros} pasajeros`);
    }
 */   
  }
  
  // Clase Moto hereda de Vehiculo
  class Moto extends Vehiculo {
    constructor(patente,marca, modelo, color, precio, cilindrada) {
      super(patente,marca, modelo, color, precio); // llamar al constructor de Vehiculo
      this.cilindrada = cilindrada;
    }
  
   /*
    // Sobrescribir método mostrarInformacion para incluir cilindrada
    mostrarInformacion() {
      console.log(`${this.constructor.name} ${this.marca} ${this.modelo}, color ${this.color}, precio: ${this.precio}, cilindrada: ${this.cilindrada}`);
    }
    */
  }
  
  // Uso de las clases refactorizadas con herencia
  const miAuto = new Auto('CAGH-09','Toyota', 'Corolla', 'Rojo', 25000);
  miAuto.mostrarInformacion();
  
  const miBus = new Bus('HJSD-87','Mercedes', 'Sprinter', 'Blanco', 60000, 20);
  miBus.mostrarInformacion();
  
  const miMoto = new Moto('DDFF-99','Honda', 'CBR', 'Negro', 12000, '600cc');
  miMoto.mostrarInformacion();
  