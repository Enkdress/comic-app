import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss'],
})
export class ComicComponent implements OnInit {
  @Input() comicImageUrl: string | undefined;

  constructor() {}

  ngOnInit() {}
}
