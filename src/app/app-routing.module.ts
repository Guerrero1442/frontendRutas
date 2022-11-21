import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConductorComponent } from './components/add-conductor/add-conductor.component';
import { AddRutaComponent } from './components/add-ruta/add-ruta.component';
import { ListaRutasComponent } from './components/list-rutas/list-rutas.component';

import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'listRuta',component:ListaRutasComponent},
  {path:'addRuta',component:AddRutaComponent},
  {path:'addConductor',component:AddConductorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 