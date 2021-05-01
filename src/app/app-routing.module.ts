import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

const routes: Routes = [];

if ( window.location.href.indexOf('public/client') >= 0 ) {

  localStorage.setItem('qrUrl', `#/public${window.location.href.split('public')[1]}`);
  routes.push(
    { 
      path: 'public', 
      loadChildren: () => import('./pages/public/public-page.module').then(m => m.PublicPageModule)
    }
  );
}
else {

  localStorage.removeItem('qrUrl');
  routes.push(
    { 
      path: '', 
      loadChildren: () => import('./pages/private/private-page.module').then(m => m.PrivatePageModule)
    }
  );
}

routes.push({ path: '**', redirectTo: '/' });

// const routes: Routes = [
  
//   { 
//     path: '', 
//     loadChildren: () => import('./pages/private/private-page.module').then(m => m.PrivatePageModule)
//   },
//   { 
//     path: 'public', 
//     loadChildren: () => import('./pages/public/public-page.module').then(m => m.PublicPageModule)
//   },
//   { path: '**', redirectTo: '/' }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ]
})
export class AppRoutingModule { }
