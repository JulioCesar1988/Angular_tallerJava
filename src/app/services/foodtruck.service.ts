import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { Foodtruck } from '../models/foodtruck';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodtruckService {
  
  // tengo que cambiar las URL para adaptar el servicio a foodtruck  
  private url_index_foodtruck = 'http://localhost:8080/Entregable5/foodtruck/todosfood'
  private url_addFoodtruck = 'http://localhost:8080/Entregable5/foodtruck/crearFood'
  private url_deleteFoodtruck = 'http://localhost:8080/Entregable5/foodtruck/'
  private url_getfoodtruck = 'http://localhost:8080/Entregable5/foodtruck/'
  private url_updateFoodtruck = 'http://localhost:8080/Entregable5/foodtruck/'

  constructor(
    private http: HttpClient
  ) { 
    console.log("servicios de foodtruck");
  }

 getFoodtrucks(){ 
     console.log("llamando a getFoodtrucks  de servicio");
    let headers = new HttpHeaders();
   headers = headers.set('Content-Type', 'application/json; charset=utf-8');
   return this.http.get(this.url_index_foodtruck,{ 'headers': headers } ); 
   

 }

 register(Foodtruck: any): Observable<any> {
  console.log("estoy en el servicio ");
  console.log(Foodtruck);
  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  return this.http.post(this.url_addFoodtruck, Foodtruck, { 'headers': headers});
}

  deleteFoodtruck(foodtruck:Foodtruck){
    console.log("eliminando foodtruck en servicio");
   console.log(foodtruck);
  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete<Foodtruck>(this.url_deleteFoodtruck+"/"+foodtruck.foodTruckId);
  }

  getFoodtruckId(id:number){
  console.log("obteniendo foodtruck");
  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    console.log("se va a buscar el foodtruck con ID : ")
    console.log(id)
    return this.http.get<any>(this.url_getfoodtruck+"/"+id);
  }


  updateFoodtruck(foodtruck:Foodtruck){
    return this.http.put<Foodtruck>(this.url_updateFoodtruck+"/"+foodtruck.foodTruckId,foodtruck);
  }


}
