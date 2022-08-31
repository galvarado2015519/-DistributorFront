import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    SidenavComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModulegeneralModule { }
