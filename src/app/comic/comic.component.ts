import { Component, Input, OnInit } from '@angular/core';
import type { Comic } from '../marvel.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss'],
})
export class ComicComponent implements OnInit {
  @Input() comic: Comic | undefined;

  constructor() {}

  ngOnInit() {}
}
