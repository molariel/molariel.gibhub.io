// este ejemplo es sin herencia

// Definición de la clase Auto
class Auto {
    constructor(marca, modelo, color, precio, tipo,tipoCombustible) {
      this.marca = marca;
      this.modelo = modelo;
      this.color = color;
      this.precio = precio;
      this.tipo = tipo;
      this.tipoCombustible = tipoCombustible 
    }
  
    mostrarInformacion() {
      console.log(`Auto ${this.marca} ${this.modelo}, color ${this.color}, precio: ${this.precio}, tipo: ${this.tipo}`);
    }
  }
  
  // Definición de la clase Bus
  class Bus {
    constructor(marca, modelo, color, precio, capacidadPasajeros,tipoCombustible) {
      this.marca = marca;
      this.modelo = modelo;
      this.color = color;
      this.precio = precio;
      this.capacidadPasajeros = capacidadPasajeros;
      this.tipoCombustible = tipoCombustible
    }
  
    mostrarInformacion() {
      console.log(`Bus ${this.marca} ${this.modelo}, color ${this.color}, precio: ${this.precio}, capacidad: ${this.capacidadPasajeros} pasajeros, tipo de servicio : ${this.tipoServicio}`);
    }
  }
  
  // Definición de la clase Moto
  class Moto {
    constructor(marca, modelo, color, precio, cilindrada,tipoCombustible) {
      this.marca = marca;
      this.modelo = modelo;
      this.color = color;
      this.precio = precio;
      this.cilindrada  = cilindrada;
      this.tipoCombustible = tipoCombustible;
    }
  
    mostrarInformacion() {
      console.log(`Moto ${this.marca} ${this.modelo}, color ${this.color}, precio: ${this.precio}, cilindrada: ${this.cilindrada}`);
    }
  }
  
  // Creación de instancias y uso
  let miAuto = new Auto('Toyota', 'Corolla', 'Rojo', 25000,'Sedan','Gasolina');
  miAuto.mostrarInformacion();
  
  let miBus = new Bus('Mercedes', 'Sprinter', 'Blanco', 60000, 20,'Petroleo');
  miBus.mostrarInformacion();
  
  let miMoto = new Moto('Honda', 'CBR', 'Negro', 12000, '600cc','Gasolina');
  miMoto.mostrarInformacion();
  