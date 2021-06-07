import { Component, OnInit } from '@angular/core';
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
  constructor() {
    
   }

  ngOnInit(): void {
  }

  register(){
    console.log(this.registerForm.get('txtEmail')?.value);
    
  }

}
