import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  message = "Este un evento en angular";

  changeMessage() {
    this.message = "El mensaje fue cambiado"
  }
}
