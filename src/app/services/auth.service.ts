import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, UserCredential, GithubAuthProvider, TwitterAuthProvider } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private authFire: Auth) {}

  loginGoogle(): Observable<UserCredential> {
    return from(signInWithPopup(this.authFire, new GoogleAuthProvider()));
  }

  loginFacebook(): Observable<UserCredential> {
    return from(signInWithPopup(this.authFire, new FacebookAuthProvider()));
  }

  loginGithub(): Observable<UserCredential> {
    return from(signInWithPopup(this.authFire, new GithubAuthProvider()));
  }

  loginTwitter(): Observable<UserCredential> {
    return from(signInWithPopup(this.authFire, new TwitterAuthProvider()));
  }

  logout() {
    this.authFire.signOut();
  }
}
