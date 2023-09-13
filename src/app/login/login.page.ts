import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router, private formBuilder: FormBuilder) {
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

  login() {
    // Aquí puedes agregar la lógica de inicio de sesión, como enviar la información al servidor o autenticar localmente.
    console.log('Correo Electrónico:', this.email);
    console.log('Contraseña:', this.password);

    // Limpia los campos después de enviar el formulario
    this.email = '';
    this.password = '';
    this.router.navigate(['/home']);
  }

  ngOnInit() {}
}
