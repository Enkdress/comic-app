import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { BookmarkService } from 'src/app/services/bookmarks.service';
import { Comic, MarvelService } from 'src/app/services/marvel.service';
import { SQLiteService } from 'src/app/services/sqlite.service';

export const BOOKMARKS_STORAGE_KEY = 'comicBookmarks';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.page.html',
})
export class ComicPage implements OnInit {
  private comicInfo: Comic | undefined;
  constructor(
    private marvelService: MarvelService,
    private route: ActivatedRoute,
    private bookmark: BookmarkService
  ) {}

  getComicInfo() {
    this.route.params.subscribe((params) => {
      this.marvelService.getComicById(params['slug']).subscribe((data) => {
        this.comicInfo = data.data.results.map((comic: any) => ({
          ...comic,
          images: comic.images.map(
            (image: any) => `${image.path}.${image.extension}`
          )[0],
        }));
      });
    });
  }

  isAlreadyBookmarked() {
    const comicStorage = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
    let exists = false;
    if (!this.comicInfo) return;

    if (comicStorage) {
      const comicsSaved: Comic[] = JSON.parse(comicStorage);
      exists = comicsSaved.some((comic) => comic.id === this.comicInfo?.id);
    }

    return exists;
  }

  addComicToBookmarksLS() {
    const comicStorage = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
    if (!this.comicInfo) return;

    if (comicStorage) {
      const comicsSaved: Comic[] = JSON.parse(comicStorage);
      if (!this.isAlreadyBookmarked()) {
        comicsSaved.push(this.comicInfo);
        localStorage.setItem(
          BOOKMARKS_STORAGE_KEY,
          JSON.stringify(comicsSaved)
        );
      }
    } else {
      const comicsSaved: Comic[] = [this.comicInfo];
      localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(comicsSaved));
    }
  }

  async addComicToBookmarksDB() {
    if (this.comicInfo) {
      this.bookmark.addBookmark(JSON.stringify(this.comicInfo));
    }
  }

  addComicToBookmarks() {
    this.addComicToBookmarksLS();
    this.addComicToBookmarksDB();
  }

  ngOnInit() {
    this.getComicInfo();
  }
}
