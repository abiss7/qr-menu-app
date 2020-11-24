import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  
  { 
    path: '', 
    loadChildren: () => import('./pages/private/private-page.module').then(m => m.PrivatePageModule),
    // canActivate: [AuthGuard]
  },
  { path: 'public', loadChildren: () => import('./pages/public/public-page.module').then(m => m.PublicPageModule) },
  { path: '**', redirectTo: 'menu' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
