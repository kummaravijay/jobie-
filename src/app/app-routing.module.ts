import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProfilesComponent } from './profiles/profiles.component';

import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  
 {path:'profiles',component:ProfilesComponent},
    
  {path:'',redirectTo:'register',pathMatch:'full'},
  {path:'signin',component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
