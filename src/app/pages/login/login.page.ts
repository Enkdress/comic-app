import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
})
export class LoginPage implements OnInit {
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.email = '';
    this.password = '';
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  loginForm: FormGroup;
  email: string;
  password: string;

  async login() {
    // Limpia los campos después de enviar el formulario
    this.email = '';
    this.password = '';
    const authResponse = await this.authService.loginUser(
      this.email,
      this.password
    );
    if (authResponse.user) {
      this.router.navigate(['/home']);
    } else {
      alert('User does not exists');
    }
  }

  goToRegisterPage() {
    this.navCtrl.navigateForward('/sign-up');
  }

  ngOnInit() {}
}
