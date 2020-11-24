import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private baseUrl = environment.baseUrl;
  authenticated = false;

  constructor(
    private http: HttpClient
  ) { }

  isAuthenticated(): Subscription {

    return this.http.get<boolean>(`${this.baseUrl}/security/auth`)
      .subscribe((auth: boolean) => {

        this.authenticated = auth;
      });
  }

  async login( username: string, password: string ): Promise<any> {

    try {
      
      const resp = await this.http.post<any>(`${this.baseUrl}/security/login`, {username, password}).toPromise();
      localStorage.setItem('token', resp.metadata.token);
      this.authenticated = true;
debugger;
    } catch (error) {

      throw error.error;
    }
  }

  async logout() {

    localStorage.removeItem('token');
    this.authenticated = false;
  }
}
