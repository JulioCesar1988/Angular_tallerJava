import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { Usuario } from '../usuarios/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private url_index_usuarios = 'http://localhost:8080/Entregable5/usuarios/todosusuarios'
  private url_addUsuario = 'http://localhost:8080/Entregable5/usuarios/crearUsuario'
  private url_deleteUsuario = 'http://localhost:8080/Entregable5/usuarios/'
  private url_getUsuario = 'http://localhost:8080/Entregable5/usuarios/'
  private url_updateUsuario = 'http://localhost:8080/Entregable5/usuarios/'


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



  deleteUsuario(usuario:Usuario){
    console.log("eliminando usuario");
  console.log(usuario);
  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete<Usuario>(this.url_deleteUsuario+"/"+usuario.usuarioId);
  }

  getUsuarioId(id:number){
    console.log("obteniendo usuario");
  ;
  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    console.log("se va a buscar el usuario con ID : ")
    console.log(id)
    return this.http.get<Usuario>(this.url_getUsuario+"/"+id);
  }


  updateUsuario(usuario:Usuario){
    return this.http.put<Usuario>(this.url_updateUsuario+"/"+usuario.usuarioId,usuario);
  }


}
