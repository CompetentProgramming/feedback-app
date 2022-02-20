import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fb-yt';

  constructor(private authFire: Auth, private router: Router) {}

  ngOnInit(): void {
    this.authFire.onAuthStateChanged(user => {
      if (!!user) {
        this.router.navigate(['feedback']);
      } else {
        this.router.navigate(['login']);
      }
    })
  }
}
