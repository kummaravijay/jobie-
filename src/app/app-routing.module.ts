import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import {JobgridComponent} from './jobgrid/jobgrid.component'

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:'register',pathMatch:'full'},
  {path:'signin',component:SigninComponent},
  {path:'jobgrid',component:JobgridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
