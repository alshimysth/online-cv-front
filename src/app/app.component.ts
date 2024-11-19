import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  sidebarOpen:boolean = true;

  toggleSidebar():void {
    console.log(this.sidebarOpen);
    this.sidebarOpen = !this.sidebarOpen;
  }
}
