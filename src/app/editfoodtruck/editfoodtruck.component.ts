import { Component, OnInit } from '@angular/core';
import { Foodtruck } from '../models/foodtruck';
import { Usuario } from '../usuarios/usuario.model';
import { FoodtruckService } from '../services/foodtruck.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editfoodtruck',
  templateUrl: './editfoodtruck.component.html',
  styleUrls: ['./editfoodtruck.component.scss']
})
export class EditfoodtruckComponent implements OnInit {

  valor_any : Array<any> = ["algo"];
  usuario = new Usuario("","",0,"",0,"","");
  foodtruck = new Foodtruck("",this.valor_any,"","","","","",this.valor_any,this.valor_any,this.usuario); 
  constructor(
    private router:Router,
    private foodtruckService:FoodtruckService
  ) { }

  ngOnInit(): void {
    this.Editar();
  }

  traerDatos(id:number){

    this.foodtruckService.getFoodtruckId(id).subscribe(
      d => console.log(d) 
    );
  }

  Editar(){
    console.log("estoy en editar de food");
    let id = localStorage.getItem("id");
    console.log(id);    
    const objectX = id as string
    console.log(objectX);

    this.foodtruckService.getFoodtruckId(+objectX)
    .subscribe(data=>{
      console.log("estoy en data",data);
      this.foodtruck=data;
    })
  }
    Actualizar(foodtruck :Foodtruck){
      this.foodtruckService.updateFoodtruck(foodtruck)
      .subscribe(data=>{
        this.foodtruck=data;
        alert("Se Actualizo con Exito...!!!");
        this.router.navigate(["Foodtruck"]);
      })
    }
}
