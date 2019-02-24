import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private titleService: Title;

  public loggedUser: string = 'User1';

  constructor(titleService: Title) {
    this.titleService = titleService;
  }

  public logOut(): void {
    console.log('Log out');
  }
}
