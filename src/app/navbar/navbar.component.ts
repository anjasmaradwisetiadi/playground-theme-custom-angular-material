import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() themeValue = new EventEmitter<any>();

  themes = [
    {
      label: 'Murasaki',
      value: 'murasaki-theme',
    },
    {
      label: 'Pink',
      value: 'pink-theme',
    },
    {
      label: 'Freeze',
      value: 'freezing-theme',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  themeChange(params: any){
    this.themeValue.emit(params.target.value)
  }
}
