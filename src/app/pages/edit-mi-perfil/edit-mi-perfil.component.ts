import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-edit-mi-perfil',
  templateUrl: './edit-mi-perfil.component.html',
  styleUrls: ['./edit-mi-perfil.component.css']
})
export class EditMiPerfilComponent implements OnInit {
  public usuario: User;
  public profileForm:FormGroup;
  public urlFotoPerfil: string;
  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {
    this.usuario = JSON.parse(localStorage.getItem('user')).user;
    this.urlFotoPerfil = this.usuario.Foto;
   }

  ngOnInit(): void {   
    this.profileForm = this.fb.group({
      txtNombreCompleto: this.usuario.Nombre+ " "+this.usuario.Apellido,
      txtFrase: this.usuario.Frase,
      txtTelefono: this.usuario.Telefono,
      txtEmail: [this.usuario.Email,[Validators.email, Validators.required]],
      txtFoto: this.usuario.Foto,
    });
  }

  onSubmit(){
    if (!this.profileForm.valid) {
      console.log('invalid form');
      return;
    }
    let nombreCompleto:string = this.profileForm.get('txtNombreCompleto').value
    let user = new User(this.usuario.user_id,this.profileForm.get('txtEmail').value, nombreCompleto.split(/ (.+)/)[0],nombreCompleto.split(/ (.+)/)[1],this.profileForm.get('txtTelefono').value,this.profileForm.get('txtFoto').value,this.profileForm.get('txtFrase').value,this.usuario.ranking);
    
    this.usuarioService.modificarUsuario(user).subscribe((response:any) => {
      if(response.success == 1){
        const userData = {
          token: JSON.parse(localStorage.getItem('user')).token,
          user: user
        };
        localStorage.setItem('user', JSON.stringify(userData));
        this.urlFotoPerfil = user.Foto;
      }
    })
  }
}
