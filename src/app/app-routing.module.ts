import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  { path: '', loadChildren: () => import('./pages/private/private-page.module').then(m => m.PrivatePageModule) },
  { path: 'public', loadChildren: () => import('./pages/public/public-page.module').then(m => m.PublicPageModule) },
  { path: '**', redirectTo: 'menu' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
