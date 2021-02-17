
import { Component ,OnInit } from '@angular/core';
import { FormGroup , FormBuilder, FormControl , Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { Usuario } from './usuario.model';
import { UsuarioService } from '../services/usuario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  title = 'TallerJava';
  public usuarios: Array<any> = [];

  constructor(
    private usuarioService: UsuarioService
  ){
   
    this.usuarioService.getUsuarios().subscribe(
    (resp: any) => {this.usuarios = resp})
  }

    ngOnInit() {
  
    }



}