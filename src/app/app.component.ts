import { Component } from '@angular/core';

import firebase from 'firebase/compat/app'
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyD59rfK1hvpzRpGkInqvlnkBKcpJipmInk",

      authDomain: "registro-rutas.firebaseapp.com"
    })
  }

  estaLogueado(){
    return this.loginService.estaLogeado()
  }

  logout(){
    this.loginService.logout()
  }
}
