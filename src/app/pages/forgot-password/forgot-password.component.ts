import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  formForgot: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  constructor(private fb: FormBuilder,private authService: AuthService) { }

  ngOnInit(): void {
    this.formForgot = this.fb.group({
      txtEmail: ['', Validators.email],
    });
  }

  onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.formForgot.valid) {
      try {
        const response = this.authService.forgot(this.formForgot.value);  
        console.log(response); 
      } catch (err) {
        this.loginInvalid = true;
        
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

}
