import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from'@angular/material/icon';
import{MatButtonModule} from'@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilesComponent } from './profiles/profiles.component';
=======
import { JobiboxComponent } from './jobibox/jobibox.component';
>>>>>>> 464c3b9ef3281f4966be9a2aed5c6b2fbf7bc357

import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { CandidateprofileComponent } from './candidateprofile/candidateprofile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MyjobComponent } from './myjob/myjob.component';
import { SavedjobsComponent } from './savedjobs/savedjobs.component';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { StepperComponent } from './stepper/stepper.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    FooterComponent,
<<<<<<< HEAD
    
    ProfilesComponent
=======
    JobiboxComponent,
    SigninComponent,
    CandidateprofileComponent,
    MyprofileComponent,
    MyjobComponent,
    SavedjobsComponent,
    StepperComponent
>>>>>>> 464c3b9ef3281f4966be9a2aed5c6b2fbf7bc357
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
<<<<<<< HEAD
    MatProgressBarModule
=======
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
>>>>>>> 464c3b9ef3281f4966be9a2aed5c6b2fbf7bc357
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
