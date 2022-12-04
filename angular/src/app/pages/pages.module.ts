import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PartialsModule } from '../partials/partials.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SurveyComponent } from './survey/survey.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [LoginComponent, RegistrationComponent, SurveyComponent, HomeComponent],
  imports: [CommonModule, BrowserModule, FormsModule, PartialsModule]
})
export class PagesModule { }
