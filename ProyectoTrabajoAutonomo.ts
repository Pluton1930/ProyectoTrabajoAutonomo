class Administrador {
  correoElectronico: string;
  contrasena: string;

  constructor(correoElectronico: string, contrasena: string) {
    this.correoElectronico = correoElectronico;
    this.contrasena = contrasena;
  }

  verPoliticasYSeguridad(): void {
    console.log("Aquí puedes ver las políticas y seguridad.");
  }

  cambiarCorreoElectronico(nuevoCorreoElectronico: string): void {
    this.correoElectronico = nuevoCorreoElectronico;
    console.log(`Tu correo electrónico ha sido cambiado a ${nuevoCorreoElectronico}.`);
  }

  cambiarContrasena(nuevaContrasena: string): void {
    this.contrasena = nuevaContrasena;
    console.log(`Tu contraseña ha sido cambiada.`);
  }
}

class Usuario {
  private usuarioID: string;
  private contrasena: string;
  private fechaRegistro: Date;

  constructor() {
    this.usuarioID = "";
    this.contrasena = "";
    this.fechaRegistro = new Date();
  }

  setUsuarioID(usuarioID: string) {
    this.usuarioID = usuarioID;
  }

  setContrasena(contrasena: string) {
    this.contrasena = contrasena;
  }

  setFechaRegistro(fechaRegistro: Date) {
    this.fechaRegistro = fechaRegistro;
  }

  verificarUsuario(usuarioID: string, contrasena: string, fechaRegistro: Date): boolean {
    return (
      this.usuarioID === usuarioID &&
      this.contrasena === contrasena &&
      this.fechaRegistro.getTime() === fechaRegistro.getTime()
    );
  }
}
class Comparar {
  private listas: Lista[];

  constructor(listas: Lista[]) {
    this.listas = listas;
  }

  public compararProducto(producto: string): void {
    console.log(`Comparando precios para el producto ${producto}:`);
    this.listas.forEach(lista => {
      const productos = lista.getProductos();
      if (productos.includes(producto)) {
        const precio = this.obtenerPrecioProducto(producto, lista);
        console.log(`- En la lista ${lista.getNombre()} el precio es de ${precio}.`);
      } else {
        console.log(`- El producto ${producto} no se encuentra en la lista ${lista.getNombre()}.`);
      }
    });
  }

  private obtenerPrecioProducto(producto: string, lista: Lista): number {
    const productos = lista.getProductos();
    const precios = [10, 20, 30, 40, 50];
    const index = productos.indexOf(producto);
    const precio = precios[index % precios.length];
    return precio;
  }
}
class Lista {
  private nombre: string;
  private productos: string[];

  constructor(nombre: string, productos: string[]) {
    this.nombre = nombre;
    this.productos = productos;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getProductos(): string[] {
    return this.productos;
  }

  public agregarProducto(producto: string): void {
    this.productos.push(producto);
  }

  public eliminarProducto(producto: string): void {
    const index = this.productos.indexOf(producto);
    if (index !== -1) {
      this.productos.splice(index, 1);
    }
  }
}
class Producto {
  private nombre: string;
  private precio: number;

  constructor(nombre: string, precio: number) {
    this.nombre = nombre;
    this.precio = precio;
  }

  getNombre(): string {
    return this.nombre;
  }

  getPrecio(): number {
    return this.precio;
  }
}

class ListasExistentes {
  private listas: Lista[];

  constructor(listas: Lista[]) {
    this.listas = listas;
  }

  public verDetallesLista(nombreLista: string): void {
    const lista = this.obtenerListaPorNombre(nombreLista);
    if (lista) {
      console.log(`Lista ${lista.getNombre()}:`);
      lista.getProductos().forEach(producto => console.log(`- ${producto}`));
    } else {
      console.log(`La lista ${nombreLista} no existe.`);
    }
  }

  public editarLista(nombreLista: string, nuevosProductos: string[]): void {
    const lista = this.obtenerListaPorNombre(nombreLista);
    if (lista) {
      lista.getProductos().splice(0, lista.getProductos().length, ...nuevosProductos);
      console.log(`La lista ${nombreLista} ha sido actualizada.`);
    } else {
      console.log(`La lista ${nombreLista} no existe.`);
    }
  }

  public eliminarLista(nombreLista: string): void {
    const index = this.listas.findIndex(lista => lista.getNombre() === nombreLista);
    if (index !== -1) {
      this.listas.splice(index, 1);
     

        this.listas.splice(index, 1);
        console.log(`La lista ${nombreLista} ha sido eliminada.`);
      } else {
        console.log(`La lista ${nombreLista} no existe.`);
      }
    }
  
    public verOtrasListasExistentes(): void {
      console.log("Otras listas existentes:");
      this.listas.forEach(lista => console.log(`- ${lista.getNombre()}`));
    }
  
    public compartirLista(nombreLista: string, usuario: string): void {
      const lista = this.obtenerListaPorNombre(nombreLista);
      if (lista) {
        console.log(`La lista ${nombreLista} ha sido compartida con ${usuario}.`);
      } else {
        console.log(`La lista ${nombreLista} no existe.`);
      }
    }
  
    public crearLista(nombre: string, productos: string[]): void {
      const lista = new Lista(nombre, productos);
      this.listas.push(lista);
      console.log(`La lista ${nombre} ha sido creada.`);
    }
  
    private obtenerListaPorNombre(nombreLista: string): Lista | undefined {
      return this.listas.find(lista => lista.getNombre() === nombreLista);
    }
  }
