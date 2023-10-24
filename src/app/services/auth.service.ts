import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private auth: Auth) {}
  async registerUser(email: string, password: string) {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async loginUser(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async signOut() {
    return await signOut(this.auth);
  }

  async getProfile() {
    return await this.auth.currentUser;
  }
}
