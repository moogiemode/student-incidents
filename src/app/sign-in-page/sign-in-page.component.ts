import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {
  passwordShown = true;
  showModal = false;

  passwordField = this.passwordShown ? 'text' : 'password';
  showHideImg = this.passwordShown
    ? '../../assets/icon--eye-closed.svg'
    : '../../assets/icon--eye-open.svg';

  passwordShowLabel = this.passwordShown ? 'hide' : 'show';

  constructor() {}

  ngOnInit(): void {}

  toggleModal = () => {
    this.showModal = !this.showModal;
    return this.showModal;
  };
}
