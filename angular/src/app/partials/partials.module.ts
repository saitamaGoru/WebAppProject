import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from './base-page/base-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BasePageComponent, FooterComponent, HeaderComponent],
  imports: [BrowserModule, FormsModule, RouterModule, CommonModule],
  exports: [BasePageComponent, FooterComponent, HeaderComponent]
})
export class PartialsModule { }
