import { Component, OnInit } from '@angular/core';
import { Comic, MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage implements OnInit {
  public comics: Comic[] = [];
  public xmenComics: Comic[] = [];
  constructor(private marvelService: MarvelService) {}

  public getMarvelComic() {
    this.marvelService.getCharacters().subscribe((data) => {
      this.comics = data.data.results
        .filter((comic: any) => comic.images.length > 0)
        .map((comic: any) => ({
          ...comic,
          images: comic.images.map(
            (image: any) => `${image.path}.${image.extension}`
          )[0],
        }));
    });
  }

  public getXMenComic() {
    const xmenId = 1009726;
    this.marvelService.getComicsByCharacter(xmenId).subscribe((data) => {
      this.xmenComics = data.data.results
        .filter((comic: any) => comic.images.length > 0)
        .map((comic: any) => ({
          ...comic,
          images: comic.images.map(
            (image: any) => `${image.path}.${image.extension}`
          )[0],
        }));
    });
  }

  ngOnInit() {
    this.getMarvelComic();
    this.getXMenComic();
  }
}
