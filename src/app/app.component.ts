import { Component } from '@angular/core';
import { User } from './address-card/user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;


  inputText: string ="Test";

  constructor() {
   this.user = new User();
   this.user.name="Arun Edagottu" ;
   this.user.title="Software Engineer";
   this.user.address ="5900 Mercury Dr, Dearborn, MI - 48127";
   this.user.phone=['123-123-3214','313-425-6789'];

  }

  
}
