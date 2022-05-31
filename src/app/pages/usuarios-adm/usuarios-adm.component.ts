import { Component, OnInit } from '@angular/core';
import { UserADM } from 'src/app/components/models/userAdm';

@Component({
  selector: 'app-usuarios-adm',
  templateUrl: './usuarios-adm.component.html',
  styleUrls: ['./usuarios-adm.component.css']
})
export class UsuariosAdmComponent implements OnInit {
  showpassword: boolean;
  showpasswordConfirm: boolean;
  usersAdm: UserADM[];
  colunas: any[];

  displayModal: boolean;
  showModalDialog() {
    this.displayModal = true;
  }

  constructor() { }

  ngOnInit(): void {
    this.setColuns();
    this.listarUsuarios();
  }


  showHidePassword(): void {
    const x: any = document.getElementById('password');
    if (x.type === 'password') {
      this.showpassword = true;
      x.type = 'text';
    } else {
      this.showpassword = false;
      x.type = 'password';
    }
  }

  showHidePassword2(): void {
    const x: any = document.getElementById('passwordConfirm');
    if (x.type === 'password') {
      this.showpasswordConfirm = true;
      x.type = 'text';
    } else {
      this.showpasswordConfirm = false;
      x.type = 'password';
    }
  }

  private listarUsuarios() {
    this.usersAdm = [
      {
        name: "Nome do Usuário",
        email: "email@email.com.br",
        delete: ""
      },
      {
        name: "Nome do Usuário",
        email: "email@email.com.br",
        delete: ""
      },
      {
        name: "Nome do Usuário",
        email: "email@email.com.br",
        delete: ""
      },
    ]
  }

  private setColuns() {
    this.colunas = [
      {
        header: "Nome do usuário",
        field: "name"
      },
      {
        header: "E-mail",
        field: "email"
      },
      {
        header: "",
        field: "delete"
      }
    ]
  }

}
