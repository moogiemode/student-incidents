import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {
  passwordShown = false;

  passwordField = this.passwordShown ? 'text' : 'password';
  showHideImg = this.passwordShown
    ? '../../assets/icon--eye-open.svg'
    : '../../assets/icon--eye-closed.svg';

  constructor() {}

  ngOnInit(): void {}
}
