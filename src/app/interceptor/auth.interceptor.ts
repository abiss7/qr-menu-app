import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');

    let request = req;

    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      });
    }
    
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {

        const path = window.location.href;

        if (err.status === 401 && path.indexOf('/client') === -1) {
          this.router.navigateByUrl('public/login');
        }

        return throwError( err );

      })
    );
  }
}
