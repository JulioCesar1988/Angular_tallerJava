import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuarios/usuario.model';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  
  usuario = new Usuario("","",0,"",0,"","");
 

lista_perfiles:string[]=["FOD","ORG"];

 constructor( public router: Router , public usuarioService: UsuarioService) {


 }

  register(usuario :Usuario) {
    console.log("estoy en el componente ");
    console.log(usuario);
    this.usuarioService.register(usuario).subscribe(data => {
      console.log(data);

      this.router.navigate(["login"]);


    });


}

  ngOnInit(): void {
  }

}
