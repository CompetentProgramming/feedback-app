import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {}

  loginViaGoogle() {
    this.auth.loginGoogle();
  }

  loginViaTwitter() {
    this.auth.loginTwitter();
  }

}
