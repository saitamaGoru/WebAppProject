import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { HeaderComponent } from './partials/header/header.component';
import { PartialsModule } from './partials/partials.module';
import { SurveyStoreComponent } from './survey-store/survey-store.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyStoreComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartialsModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
