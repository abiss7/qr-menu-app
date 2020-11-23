import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { MenuComponent } from '../private/menu/menu.component';
import { QrComponent } from '../private/qr/qr.component';

const routes: Routes = [
  
  { path: '', component: MenuComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'qr', component: QrComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRountingModule { }
