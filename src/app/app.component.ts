import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Services
import { SecurityService } from './services/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isAuthenticated: Observable<boolean> | undefined;

  constructor(
    private securityService: SecurityService
  ) {}

  ngOnInit(): void {
    
    this.isAuthenticated = this.securityService.isAuthenticated();
  }
}
