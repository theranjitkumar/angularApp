import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';

import { PublicComponent } from './public.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';

@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    AboutComponent,
    ContactusComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
