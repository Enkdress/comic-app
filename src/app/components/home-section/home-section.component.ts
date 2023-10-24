import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
})
export class HomeSectionComponent implements OnInit {
  @Input() title: string = '';
  @Input() hasLink: boolean = true;
  constructor() {}

  ngOnInit() {}
}
