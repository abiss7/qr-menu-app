import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Routes
import { PublicRoutingModule } from './public-routing.module';

// PdfViewer
import { PdfViewerModule } from 'ng2-pdf-viewer';

// Pages
import { LoginComponent } from '../public/login/login.component';
import { MenuClientComponent } from '../public/menu-client/menu-client.component';

@NgModule({
  declarations: [
    LoginComponent,
    MenuClientComponent,
  ],
  exports: [
    LoginComponent,
    MenuClientComponent,
  ],
  imports: [
    CommonModule,
    PdfViewerModule,
    ReactiveFormsModule,
    PublicRoutingModule
  ]
})
export class PublicPageModule { }
