import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cloudinary } from '@cloudinary/angular-5.x';

// Herlpers
import { FileHelper } from '../helpers';

// Environments
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QrMenuService {

  private baseUrl = environment.baseUrl;
  private cloudinaryBaseUrl = `https://api.cloudinary.com/v1_1/${ environment.cloudinary.cloud_name }`;
  private upload_preset = environment.cloudinary.upload_preset;
  private cloud_name = environment.cloudinary.cloud_name;

  constructor(
    private http: HttpClient,
    private cloudinary: Cloudinary
  ) {
    
  }

  upload(file: File): Observable<HttpEvent<any>> {

    const formData: FormData = new FormData();
    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  upload2(file: File): Observable<HttpEvent<any>> {

    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', this.upload_preset);

    const req = new HttpRequest('POST', `${this.cloudinaryBaseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {

    return this.http.get(`${this.baseUrl}/files`)
      .pipe(
        map((resp: any) => {

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

  clearFiles(): Observable<any> {

    return this.http.delete(`${this.baseUrl}/files-clear`);
  }
}
