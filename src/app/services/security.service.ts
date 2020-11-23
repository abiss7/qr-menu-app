import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private baseUrl = 'http://localhost:5000';

  constructor(
    private http: HttpClient
  ) { }

  isAuthenticated(): Observable<boolean> {

    return this.http.get<boolean>(`${this.baseUrl}/security/auth`);
  }

  async login( username: string, password: string ): Promise<any> {

    try {
      
      return await this.http.post(`${this.baseUrl}/security/login`, {username, password}).toPromise();

    } catch (error) {

      throw error.error;
    }
  }
}
