import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { setTheme } from 'ngx-bootstrap/utils';
import Swal from 'sweetalert2';
import { environment } from '../environments/environment';

// Services
import { SecurityService } from './services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  subscription: Subscription | undefined;
  showBloqueo = false;

  constructor(
    public securityService: SecurityService,
    private router: Router
  ) {
    setTheme('bs4');
  }

  ngOnInit(): void {

    // Si viene del cliente
    if (window.location.href.indexOf('public/client') >= 0) {

      if (!this.isPublicKeyAvailable()) {

        Swal.fire({
          title: 'Bloqueado',
          text: 'Acceso restringido!!!',
          allowOutsideClick: false,
          showConfirmButton: false,
          icon: 'error'
        }
        );

        this.showBloqueo = true;
      }
      else {
        this.router.navigate([`public/client/${environment.publicKey}`]);
      }

    }
    else {

      this.subscription = this.securityService.isAuthenticated();
    }
  }

  ngOnDestroy(): void {

    if (this.subscription) {

      this.subscription.unsubscribe();
    }
  }

  isPublicKeyAvailable(): boolean {

    const publicKey = window.location.href.split('public/client/').pop();

    return environment.publicKey === publicKey;
  }

  showHeader(): boolean {

    return this.securityService.authenticated;
  }
}
