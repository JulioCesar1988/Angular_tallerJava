//{
  //"nombre": "panchito99999",    
  //"servicios":["bebida","comida"],
  //"descripcion": "haciendo una modificacion",
  //"url": "somospancho.com",
  //"whatsapp": "2323222",
  //"twitter": "somospanchito",
  //"instagram": "somospancho",
  //"zonas": ["Gonnet","La plata "],
  //"pathImagenes":["Gonnet","directorioServidor/fiestaFinDeAño.jpg"],
  //"usuario": {
  //"usuarioId":26

import { Usuario } from "../usuarios/usuario.model";

export class Foodtruck {
  public foodTruckId!: number;
  public nombre: string;
  public servicios!: Array<any>;
  public descripcion!: string;
  public url!: string;
  public whatsapp!: string;
  public twitter!: string;
  public instagram!: string;
  public zonas!: Array<any>;
  public pathImagenes!: Array<any>;
  public usuario!: Usuario;

  constructor (nombre: string, servicios: Array<any> , descripcion: string , url: string, whatsapp: string,
    twitter: string,instagram: string,zonas: Array<any>,pathImagenes: Array<any>, usuario:Usuario
  ){
    //public foodTruckId!: number;
    this.nombre=nombre;
    this.servicios=servicios;
    this.descripcion=descripcion;
    this.url=url;
    this.whatsapp=whatsapp;
    this.twitter=twitter;
    this.instagram=instagram;
    this.zonas=zonas;
    this.pathImagenes=pathImagenes;
    this.usuario = usuario;
  }

public asignarUsuario(usuario: Usuario){
  this.usuario = usuario;
}


 }