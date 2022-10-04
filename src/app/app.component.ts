import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'playground-theming-angular';
  currentTheme = 'murasaki-theme'

  acceptTheme(params: string){
    this.currentTheme = params;
  }

}
