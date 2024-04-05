import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  get title(): string{
    // return this.headerService.headerData.title;
    return '';
  }

  get icon(): string{
    // return this.headerService.headerData.icon;
    return '';
  }

  get routeUrl(): string{
    // return this.headerService.headerData.routeUrl;
    return '';
  }

}
