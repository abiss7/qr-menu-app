import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

// Herlpers
import { FileHelper } from 'src/app/helpers/file.helper';

// Services
import { QrMenuService } from 'src/app/services/qr-menu.service';

@Component({
  selector: 'app-menu-client',
  templateUrl: './menu-client.component.html',
  styleUrls: ['./menu-client.component.css']
})
export class MenuClientComponent implements OnInit {

  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  filesPdf: any[] = [];
  filesImg: any[] = [];

  constructor(
    private qrMenuService: QrMenuService
  ) { }

  ngOnInit(): void {

    Swal.fire({
      title: 'Cargando...',
      text: 'Por favor espere...',
      allowOutsideClick: false,
      showConfirmButton: false,
      onBeforeOpen: () => {

        Swal.showLoading();
      }
    });

    this.qrMenuService.getFiles()
      .subscribe((files: any[]) => {

        this.filesPdf = files.filter(f => FileHelper.isPdf(f));
        this.filesImg = files.filter(f => !FileHelper.isPdf(f));

        Swal.close();
      }, error => {

        Swal.fire('Problemas', error.error, 'error');
      });
  }

}
