import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  ionicForm!: FormGroup;

  constructor(
    private loadingController: LoadingController,
    private authService: AuthService,
    private router: Router,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    // this.signUP()
    this.ionicForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: [
        '',
        [
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
          ),
          Validators.required,
        ],
      ],
    });
  }
  get errorControl() {
    return this.ionicForm.controls;
  }

  async signUP() {
    const loading = await this.loadingController.create();
    await loading.present();
    if (this.ionicForm.valid) {
      const user = await this.authService
        .registerUser(this.ionicForm.value.email, this.ionicForm.value.password)
        .catch((err) => {
          alert(err);
          console.log(err);
          loading.dismiss();
        });

      if (user) {
        loading.dismiss();
        this.router.navigate(['/home']);
      }
    } else {
      return console.log('Please provide all the required values!');
    }
  }
}
