import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, FormControl , Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { Usuario } from '../usuarios/usuario.model';
import { UsuarioService } from '../services/usuario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

usuario = new Usuario("","",0,"",0,"","");
 

lista_perfiles:string[]=["FOD","ORG"];

 constructor(public usuarioService: UsuarioService) {}

  register(usuario :Usuario) {
    console.log("estoy en el componente ");
    console.log(usuario);
    this.usuarioService.register(usuario).subscribe(data => {
      console.log(data);
    });

  
}



  ngOnInit() {
  
  }



}
