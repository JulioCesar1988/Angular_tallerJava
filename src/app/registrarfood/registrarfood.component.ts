import { Component, OnInit } from '@angular/core';
import { Foodtruck } from '../models/foodtruck';
import { Router } from '@angular/router';
import { FoodtruckService } from '../services/foodtruck.service';
import { Usuario } from '../usuarios/usuario.model';

@Component({
  selector: 'app-registrarfood',
  templateUrl: './registrarfood.component.html',
  styleUrls: ['./registrarfood.component.scss']
})
export class RegistrarfoodComponent implements OnInit {
  zonas:string[]=[];
  servicios:string[]=[];
  pathImagenes:string[]=["p3","p2","p3"];
  usuario  = new Usuario("","",0,"",0,"","");
  
  foodtruck = new Foodtruck("",this.servicios,"","","","","",this.zonas,this.pathImagenes,this.usuario);
  lista_servicios:string[]=["Bebida","Comida","Helado"];
  lista_zonas:string[]=["La Plata","Florencio Varela","Microcentro"];
  constructor(public router: Router ,
              public foodtruckService: FoodtruckService) {
               }
  register(foodtruck :Foodtruck ) {

    console.log("analizando id usuario ");
    console.log(foodtruck);
    // aca tengo que dar el ID del usuario logeado .
     let id = localStorage.getItem("id");
    this.usuario = new Usuario("","",0,"",0,"","");
    console.log("estoy en el componente ")
    console.log(this.usuario);
   
    this.usuario.setId(parseInt(id == null?"1":id));
   
    foodtruck.usuario = this.usuario;
    console.log(foodtruck);

    console.log("paso por aca");
    this.foodtruckService.register(foodtruck).subscribe(data => {
      console.log(data);
      this.router.navigate(["foodtrucks"]);
    });

  }
  ngOnInit(): void {
  }

}
