import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-client',
  templateUrl: './menu-client.component.html',
  styleUrls: ['./menu-client.component.css']
})
export class MenuClientComponent implements OnInit {

  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

  constructor() { }

  ngOnInit(): void {

  }

}
