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
}
