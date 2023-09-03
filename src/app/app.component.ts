import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comic-app';
  index = 2;
  comicList = [
    {
      id: 1,
      title: 'Marvel Age (2023) #1000',
      description: 'A comic of marvel',
      createdAt: new Date()
    },
    {
      id: 2,
      title: 'Ms. Marvel: The new mutant (2023)',
      description: 'A comic of marvel',
      createdAt: new Date()
    },
    {
      id: 3,
      title: 'Blade (2023)',
      description: 'A comic of marvel',
      createdAt: new Date()
    },
    {
      id: 4,
      title: 'Stars Wars: The Mandalorian season',
      description: 'A comic of marvel',
      createdAt: new Date()
    },
  ]
}
