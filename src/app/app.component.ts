import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'playground-theming-angular';
  currentTheme = 'murasaki-theme'
  constructor() {
  }

  ngOnInit(){

  }
  acceptTheme(params: string){
    this.currentTheme = params;
  }

}
