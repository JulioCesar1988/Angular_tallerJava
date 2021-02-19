
import { Component ,OnInit } from '@angular/core';
import { FormGroup , FormBuilder, FormControl , Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { Usuario } from './usuario.model';
import { UsuarioService } from '../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  title = 'TallerJava';
  public usuarios: Array<any> = [];

  constructor(
    private usuarioService: UsuarioService ,
    private router: Router
  ){
   
    this.usuarioService.getUsuarios().subscribe(
    (resp: any) => {this.usuarios = resp})
  }

    ngOnInit() {
  
    }


    Delete(usuario:Usuario){
      this.usuarioService.deleteUsuario(usuario)
      .subscribe(data=>{
        this.usuarios=this.usuarios.filter(p=>p!==usuario);
        alert("Usuario eliminado...");
      })
    }

    Editar(usuario:Usuario):void{
      localStorage.setItem("id",usuario.usuarioId.toString());
      console.log("aaaaaaah me quiere actualizar");
      this.router.navigate(["edictusuario"]);
    }


}