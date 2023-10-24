import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
})
export class ProfilePage implements OnInit {
  name: string;
  lastName: string;
  email: string;
  constructor() {
    this.name = 'Carlos';
    this.lastName = 'Ortigoza';
    this.email = 'carlosandresortigoza@gmail.com';
  }

  ngOnInit() {
  }

}
