import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showpassword: boolean;
  loginForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      password: ['test', [Validators.required, Validators.minLength(3)]],
      email: ['test', [Validators.required, Validators.email]]
    });
  }

  showHidePassword(): void {
    const x: any = document.getElementById('inputPassword');
    if (x.type === 'password') {
      this.showpassword = true;
      x.type = 'text';
    } else {
      this.showpassword = false;
      x.type = 'password';
    }
  }
}
