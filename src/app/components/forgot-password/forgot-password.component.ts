import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  showpassword: boolean;
  showpasswordConfirm: boolean;
  constructor() { }

  ngOnInit(): void {
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

}
