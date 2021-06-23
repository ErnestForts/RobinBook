import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  constructor(private fb: FormBuilder,private authService: AuthService,private snackBar: MatSnackBar) { }

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
        this.authService.forgot(this.formForgot.value).subscribe((response: any) => {
          //toast email enviado

          if (response.emailStatus == 'OK'){
            this.snackBar.open('Correo de recuperacion enviado!','Vale',{
              duration: 2000,
              verticalPosition: 'bottom', // Allowed values are  'top' | 'bottom'
              horizontalPosition: 'center', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
            });
          }else{
            this.snackBar.open('Usuario no encontrado','Vale',{
              duration: 2000,
              verticalPosition: 'bottom', // Allowed values are  'top' | 'bottom'
              horizontalPosition: 'center', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
            });
          }
        });
      } catch (err) {
        this.loginInvalid = true;
        
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}
