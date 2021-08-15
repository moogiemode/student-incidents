import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() show = false;
  @Input() customClass = '';
  @Input() closeCallback = () => false;
  @Input() passwordShown = false;
  @Input() showHideImg = this.passwordShown
    ? '../../assets/icon--eye-closed.svg'
    : '../../assets/icon--eye-open.svg';
  @Input() passwordShowLabel = this.passwordShown ? 'hide' : 'show';
  @Input() passwordField = this.passwordShown ? 'text' : 'password';
}
