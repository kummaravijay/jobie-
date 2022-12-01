import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateprofileComponent } from './candidateprofile/candidateprofile.component';
import { HeaderComponent } from './header/header.component';
import { JobiboxComponent } from './jobibox/jobibox.component';
import { HomeComponent } from './home/home.component';
import { MyjobComponent } from './myjob/myjob.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { RegisterComponent } from './register/register.component';
import { SavedjobsComponent } from './savedjobs/savedjobs.component';
import { SigninComponent } from './signin/signin.component';
import {JobgridComponent} from './jobgrid/jobgrid.component'
import { StepperComponent } from './stepper/stepper.component';



const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:'register',pathMatch:'full'},
  {path:'signin',component:SigninComponent},
  {path:'jobgrid',component:JobgridComponent},
  {path:'jobibox',component:JobiboxComponent},
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  {
    path:'stepper',component:StepperComponent
  },
  {
    path:'homecomponent',component:HomeComponent
  },
  {
    path:'candidateprofile', component: CandidateprofileComponent,
    children: [
      // {
      //   path:'',component:MyprofileComponent
      // },
      {
        path: 'myprofile',component: MyprofileComponent
      },
      {
        path: 'myjob',component:MyjobComponent
      },
      {
        path:'savedjobs',component:SavedjobsComponent
      },
      
    ]

  },
  { path: 'signin',component:SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
