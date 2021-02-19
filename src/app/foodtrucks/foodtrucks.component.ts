import { Component, OnInit } from '@angular/core';

import { FormGroup , FormBuilder, FormControl , Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { Foodtruck } from '../models/foodtruck';
import { FoodtruckService } from '../services/foodtruck.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foodtrucks',
  templateUrl: './foodtrucks.component.html',
  styleUrls: ['./foodtrucks.component.scss']
})
export class FoodtrucksComponent implements OnInit {

  title = 'TallerJava';
  public foodtrucks: Array<any> = [];




  constructor(
    private foodtruckService: FoodtruckService ,
    private router: Router
  ) { 

    this.foodtruckService.getFoodtrucks().subscribe(
      (resp: any) => {this.foodtrucks = resp})

  }

  Delete(foodtruck:Foodtruck){
    console.log("eliminando");
    console.log(foodtruck);
    this.foodtruckService.deleteFoodtruck(foodtruck)
    .subscribe(data=>{
      this.foodtrucks=this.foodtrucks.filter(p=>p!==foodtruck);
      alert("Foodtruck eliminado...");
    })
  }

  Editar(foodtruck:Foodtruck):void{
    console.log(" food recibido");
    console.log(foodtruck);
    localStorage.setItem("id",foodtruck.foodTruckId.toString());
    this.router.navigate(["editfoodtruck"]);
    
  }

  ngOnInit(): void {
  }

}

