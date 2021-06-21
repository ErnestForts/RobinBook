import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/services/server.service';
import { MustMatch } from 'src/app/_helpers/must-match.validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm:FormGroup;

  private _shown = false;
  public isVisible = 'fa fa-fw fa-eye field-icon toggle-password';
  constructor(@Inject(DOCUMENT) private document: Document, private fb: FormBuilder, private server: ServerService, private router: Router) {
    
   }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      txtEmail: ['', Validators.email],
      txtNombre: ['', Validators.required],
      txtApellidos: ['', Validators.required],
      txtPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      txtRePassword: ['', Validators.required],
    },{validator: MustMatch('txtPassword', 'txtRePassword')});
  }

  onSubmit(){
    if (!this.registerForm.valid) {
      console.log('Form not valid. Please check that fields are correctly filled in');
      return;
    }

    console.log('Form valid');
    const request = this.server.request('POST', '/api/users/register', {
      Email: this.registerForm.get('txtEmail').value,
      Nombre: this.registerForm.get('txtNombre').value,
      Apellido: this.registerForm.get('txtApellidos').value,
      Password: this.registerForm.get('txtPassword').value
    });

    request.subscribe(() => {
      this.router.navigate(['/login']);
    })
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
