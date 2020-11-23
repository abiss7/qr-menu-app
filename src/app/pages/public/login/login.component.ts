import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

// Services
import { SecurityService } from '../../../services/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private securityService: SecurityService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({
      username: [ '', [ Validators.required, Validators.maxLength(20) ] ],
      password: [ '', [ Validators.required, Validators.maxLength(20) ] ]
    });
  }

  async signIn() {

    if ( this.formGroup.valid ) {

      const userName = this.formGroup.value.username;
      const password = this.formGroup.value.password;

      try {
        
        Swal.fire({
          title: 'Cargando...',
          text: 'Por favor espere...',
          allowOutsideClick: false,
          onBeforeOpen: () => {

              Swal.showLoading();
          }
      });

        const resp = await this.securityService.login( userName, password );

        Swal.close();
        // Redirect
      } catch (err) {

        Swal.fire('Problemas', err.error, 'error');
      }
    }
  }
}
