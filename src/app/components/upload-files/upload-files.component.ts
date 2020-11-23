import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { QrMenuService } from 'src/app/services/qr-menu.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import Swal from 'sweetalert2';

// Helpers
import { FileHelper } from '../../helpers';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

  selectedFiles: FileList | undefined;
  progressInfos: any[] = [];
  message = '';
  @ViewChild('inputFile') inputFile: ElementRef | undefined;

  fileInfos: Observable<any> | undefined;

  constructor(
    private qrMenuService: QrMenuService
  ) { }

  ngOnInit(): void {

    this.fileInfos = this.qrMenuService.getFiles();
  }

  selectFiles(event: { target: { files: FileList | undefined; }; }) {
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
  }

  uploadFiles() {
    
    this.message = '';
    if ( this.selectedFiles !== undefined ) {

      if (!FileHelper.isFileAvailable(this.selectedFiles)) {

        Swal.fire('Archivo inválido', 'Solamente se permiten archivos de imagen o pdf!!!', 'error');
        this.clearInputFile();
        return;
      }

      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }

  upload(idx: any, file: any) {

    this.progressInfos[idx] = { value: 0, fileName: file.name };
  
    this.qrMenuService.upload(file).subscribe(
      (event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.fileInfos = this.qrMenuService.getFiles();
        }
      },
      err => {
        this.progressInfos[idx].value = 0;
        this.message = 'No se pudo subir el archivo' + file.name;
        Swal.fire('Problemas al subir el archivo!!!', 'No se pudo subir el archivo: ' + file.name + '. \nAsegúrese de tener conexión a Internet', 'error');
        this.clearInputFile();
      });
  }

  private clearInputFile() {
    
    this.inputFile?.nativeElement.value = '';
  }
}
