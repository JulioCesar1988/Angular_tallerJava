import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { Usuario } from '../usuarios/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private url_index_usuarios = 'http://localhost:8080/Entregable_5/usuarios/todosusuarios'
  private url_addUsuario = 'http://localhost:8080/Entregable_5/usuarios/crearUsuario'

  constructor(
    private http: HttpClient
  ) { 
    console.log("servicios de usuarios");
  }

 getUsuarios(){
   //let header = new HttpHeaders().set('Type-content','aplication/json')
   let headers = new HttpHeaders();
   headers = headers.set('Content-Type', 'application/json; charset=utf-8');
   return this.http.get(this.url_index_usuarios,{ 'headers': headers } ); 
 }



 register(Usuario: any): Observable<any> {
  console.log("estoy en el servicio ");
  console.log(Usuario);
  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  return this.http.post(this.url_addUsuario, Usuario, { 'headers': headers});
}

}
