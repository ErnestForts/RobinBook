import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  private _shown = false;
  public isVisible = 'fa fa-fw fa-eye field-icon toggle-password';
  constructor(@Inject(DOCUMENT) private document: Document) {
   }

  ngOnInit(): void {
  }

  toggle() {
    this._shown = !this._shown;
    var password = this.document.getElementById("txtPassword");
    if (this._shown) {
      password.setAttribute('type', 'text');
      this.isVisible = "fa fa-fw fa-eye fa-eye-slash field-icon";
    } else {
      password.setAttribute('type', 'password');
      this.isVisible = "fa fa-fw fa-eye field-icon toggle-password";
    }
  }
}
