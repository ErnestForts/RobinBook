import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  formLogin: FormGroup;
  public passwordInvalid: boolean;
  public emailInvalid: boolean;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  
  private _shown = false;
  public isVisible = 'fa fa-fw fa-eye field-icon toggle-password';
  constructor(@Inject(DOCUMENT) private document: Document,private fb: FormBuilder, private authService: AuthService) {
   }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      txtEmail: ['', Validators.email],
      txtPassword: ['', Validators.required]
    });
  }

  
  onSubmit() {
    this.emailInvalid = false;
    this.passwordInvalid = false;
    this.formSubmitAttempt = false;
    this.loginInvalid = false;
    if (this.formLogin.valid) {
      try {
        this.authService.login(this.formLogin.value);
        this.authService.isLoggedIn.subscribe((response:any) =>{
          // if(!response){
          //   // this.loginInvalid = true;
          // }
        });            
      } catch (err) {
        console.log('invalid '+ err); 
        this.loginInvalid = true; 
      }
    } else {
      this.formSubmitAttempt = true;
      if(this.formLogin.value.txtEmail == '' && this.formLogin.value.txtPassword == ''){
        this.loginInvalid = true;
      }
      
      if(!this.formLogin.get('txtEmail').valid){
        this.emailInvalid = true;
      }
    }
  }
  get formControls() { return this.formLogin.controls; }


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
