import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EdictusuarioComponent } from './edictusuario/edictusuario.component';
import { RegistrarfoodComponent } from './registrarfood/registrarfood.component';
import { FoodtrucksComponent } from './foodtrucks/foodtrucks.component';
import { EditfoodtruckComponent } from './editfoodtruck/editfoodtruck.component';
const routes: Routes = [


  {path:'editfoodtruck',
  component: EditfoodtruckComponent
  },
  {path:'foodtrucks',
  component: FoodtrucksComponent
  },

  {path:'registrarfood',
  component: RegistrarfoodComponent
  },

  {path:'edictusuario',
  component: EdictusuarioComponent
  },

  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
},

{
  path: 'login',
  component: LoginComponent
},
{
  path: 'registrar',
  component: RegistrarComponent
},
{
path: 'usuarios',
component: UsuariosComponent
},

   // otherwise redirect to home
   { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
