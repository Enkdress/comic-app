import { Component, Input, OnInit } from '@angular/core';
import type { Comic } from '../../services/marvel.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
})
export class ComicComponent implements OnInit {
  @Input() comic: Comic | undefined;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  goToComicPage(id: number) {
    this.navCtrl.navigateForward(`/comic/${id}`);
  }
}
