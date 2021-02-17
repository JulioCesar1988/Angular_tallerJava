export class Usuario {
  public usuarioId!: number;
  public nombre: string;
  public apellido: string;
  public dni: number;
  public email: string;
  public telefono: number;
  public contrasenia: string;
  public tipoUsuario: string
 
  constructor (nombre: string, apellido: string , dni: number , email: string , telefono: number , contrasenia: string, tipoUsuario: string
  ){
  this.nombre = nombre;
  this.apellido = apellido;
  this.dni = dni;
  this.email = email;
  this.telefono = telefono;
  this.contrasenia = contrasenia;
  this.tipoUsuario = tipoUsuario;
  }


 }