import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routes
import { PublicRoutingModule } from './public-routing.module';

// Pages
import { LoginComponent } from '../public/login/login.component';
import { MenuClientComponent } from '../public/menu-client/menu-client.component';

@NgModule({
  declarations: [
    LoginComponent,
    MenuClientComponent
  ],
  exports: [
    LoginComponent,
    MenuClientComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicPageModule { }
