import { Component, OnInit } from '@angular/core';

// Services
import { QrMenuService } from '../../../services/qr-menu.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {

  fileQr: Observable<any> | undefined;

  constructor(
    private qrMenuService: QrMenuService
  ) { }

  ngOnInit(): void {

    this.qrMenuService.getQr()
      .subscribe( qr => {

        this.fileQr = qr;
      });
  }

}
