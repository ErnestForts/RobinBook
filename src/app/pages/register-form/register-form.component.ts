import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({
    txtEmail: new FormControl(''),
    txtNombre: new FormControl(''),
    txtApellidos: new FormControl(''),
    txtPassword: new FormControl(''),
    txtRePassword: new FormControl('')
  });
  private _shown = false;
  public isVisible = 'fa fa-fw fa-eye field-icon toggle-password';
  constructor(@Inject(DOCUMENT) private document: Document) {
   }

  ngOnInit(): void {
  }

  register(){
    console.log(this.registerForm.get('txtEmail')?.value);
    
  }

  toggle(input:string,clase:string) {
    
    this._shown = !this._shown;
    var password = this.document.getElementById(input);
    var span = this.document.getElementById(clase);
    if (this._shown) {
      password.setAttribute('type', 'text');
      span.className = "fa fa-fw fa-eye fa-eye-slash field-icon";
    } else {
      password.setAttribute('type', 'password');
      span.className = "fa fa-fw fa-eye field-icon toggle-password";
    }
  }

}
