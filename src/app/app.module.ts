import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModulegeneralModule } from './portal/modulegeneral/general.module';
import { ModuleapplicationModule } from './portal/moduleapplication/application.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModulegeneralModule,
    ModuleapplicationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
