import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title: string = 'portfolio';
  shownMain: boolean = false;
  shownAdd: boolean = false;

  showMenu(e) {
    if(e.currentTarget.id === 'main') {
      this.shownMain = !this.shownMain;
    } else if (e.target.id === 'navbarLink'){
      console.log(e.target.id)
      this.shownAdd = !this.shownAdd;
    }
    
  }
}
