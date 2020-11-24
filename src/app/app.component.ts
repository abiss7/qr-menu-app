import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// Services
import { SecurityService } from './services/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  subscription: Subscription | undefined;

  constructor(
    public securityService: SecurityService
  ) {}

  ngOnInit(): void {
    
    this.subscription = this.securityService.isAuthenticated();
  }

  ngOnDestroy(): void {
    
    if (this.subscription) {

      this.subscription.unsubscribe();
    }
    
  }
}
