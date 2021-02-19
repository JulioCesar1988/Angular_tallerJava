import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../usuarios/usuario.model';



@Component({
  selector: 'app-edictusuario',
  templateUrl: './edictusuario.component.html',
  styleUrls: ['./edictusuario.component.scss']
})
export class EdictusuarioComponent implements OnInit {



  usuario = new Usuario("","",0,"",0,"","");
 
  constructor(private router:Router,private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    console.log("editar de usuario ");
    let id = localStorage.getItem("id");
    console.log("id de food");
    console.log(id);    
    const objectX = id as string
    console.log(objectX);
    this.usuarioService.getUsuarioId(+objectX)
    .subscribe(data=>{
      this.usuario=data;
    })
  }
    Actualizar(usuario :Usuario){
      this.usuarioService.updateUsuario(usuario)
      .subscribe(data=>{
        this.usuario=data;
        alert("Se Actualizo con Exito...!!!");
        this.router.navigate(["usuarios"]);
      })
    }




}
