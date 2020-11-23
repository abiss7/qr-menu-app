import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Herlpers
import { FileHelper } from '../helpers';

@Injectable({
  providedIn: 'root'
})
export class QrMenuService {

  private baseUrl = 'http://localhost:5000';

  constructor(
    private http: HttpClient
  ) { }

  upload(file: File): Observable<HttpEvent<any>> {

    const formData: FormData = new FormData();
    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {

    return this.http.get(`${this.baseUrl}/files`)
      .pipe(
        map(( resp: any ) => {

          const mapper = resp.map((file: any) => ({
            ...file,
            type: FileHelper.isPdf(file) ? 'pdf' : 'img'
          }));

          return mapper;
        })
      );
  }

  getQr(): Observable<any> {

    return this.http.get(`${this.baseUrl}/qr`);
  }
}
