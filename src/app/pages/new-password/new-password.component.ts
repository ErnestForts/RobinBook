import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ServerService } from 'src/app/services/server.service';
import { MustMatch } from 'src/app/_helpers/must-match.validator';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  formForgot: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;

  private _shown = false;
  private token:any;
  public isVisible = 'fa fa-fw fa-eye field-icon toggle-password';

  constructor(@Inject(DOCUMENT) private document: Document,private fb: FormBuilder, private authService: AuthService, private server: ServerService, private router: Router,private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.token = this.route.snapshot.params.reset;    
    this.formForgot = this.fb.group({
      txtPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      txtRePassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    }, {validator: MustMatch('txtPassword', 'txtRePassword')});
  }

  onSubmit(){
    if (!this.formForgot.valid) {
      console.log('Form not valid. Please check that fields are correctly filled in');
      return;
    }
    const request = this.server.requestCustomHeader('PUT', '/api/users/new-password', {
      newPassword: this.formForgot.get('txtPassword').value,
      reset: this.token
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
