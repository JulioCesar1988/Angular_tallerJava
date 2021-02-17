/*import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TallerJava';
  public usuarios: Array<any> = [];

  constructor(
    private usuarioService: UsuarioService
  ){
   
    this.usuarioService.getUsuarios().subscribe(
    (resp: any) => {this.usuarios = resp})
  }
}**/

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './services/authentication.service';
import { UsuarioService } from './services/usuario.service';
import { User } from './models/User';
import { Usuario } from './usuarios/usuario.model';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser!: User;
    public usuarios: Array<any> = [];

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {

        // navbar del login y autenticacion
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

    
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

    // index de usuarios 
     index( usuarioService: UsuarioService){
      // para el armado de la lista de usuarios 
    usuarioService.getUsuarios().subscribe(
      (resp: any) => {this.usuarios = resp})    
     }

     eventos_index(){
      console.log('listado de eventos');
      this.router.navigate(['/eventos']);

    }
    
     usuarios_index(){
      console.log('listado de usuarios');
      this.router.navigate(['/usuarios']);
    }

    usuarioEliminar(){
      console.log('Eliminando a usuario :')
      //console.log(usuarioId)
      
      //this.router.navigate(['/usuarios']);

    }


    


  
     foodtrucks_index(){
      console.log('listado de foodtruck');
      this.router.navigate(['/foodtrucks']);
    
    }
     

  }