import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import {ErrorInterceptor } from './helpers/error.interceptor';
import { from } from 'rxjs';

import {ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { EdictusuarioComponent } from './edictusuario/edictusuario.component';
import { RegistrarfoodComponent } from './registrarfood/registrarfood.component';
import { FoodtrucksComponent } from './foodtrucks/foodtrucks.component';
import { EditfoodtruckComponent } from './editfoodtruck/editfoodtruck.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    UsuariosComponent,
    RegistrarComponent,
    EdictusuarioComponent,
    RegistrarfoodComponent,
    FoodtrucksComponent,
    EditfoodtruckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent,LoginComponent,HomeComponent,RegistrarComponent,EdictusuarioComponent,RegistrarfoodComponent,FoodtrucksComponent,EditfoodtruckComponent]
})
export class AppModule { }
