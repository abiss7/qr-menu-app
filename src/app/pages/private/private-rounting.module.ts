import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { MenuComponent } from '../private/menu/menu.component';
import { QrComponent } from '../private/qr/qr.component';
import { AuthGuard } from '../../guards/auth.guard';
import { LoginComponent } from '../public/login/login.component';

const routes: Routes = [
  
  { path: '', component: MenuComponent, canActivate: [AuthGuard] },
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
  { path: 'qr', component: QrComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRountingModule { }
