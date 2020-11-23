import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { PrivatePageModule } from './pages/private/private-page.module';
import { PublicPageModule } from './pages/public/public-page.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrivatePageModule,
    PublicPageModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
