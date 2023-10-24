import { Injectable } from '@angular/core';

import { SQLiteService } from './sqlite.service';
import { BookmarkService } from './bookmarks.service';

@Injectable()
export class InitializeAppService {
  isAppInit: boolean = false;
  platform!: string;

  constructor(
    private sqliteService: SQLiteService,
    private bookmarkService: BookmarkService
  ) {}

  async initializeApp() {
    await this.sqliteService.initializePlugin().then(async (ret) => {
      this.platform = this.sqliteService.platform;
      try {
        if (this.sqliteService.platform === 'web') {
          await this.sqliteService.initWebStore();
        }
        // Initialize the marvel_comics_db database
        const DBCOMIC = 'marvel_comics_db.db';
        await this.bookmarkService.initializeDatabase(DBCOMIC);

        if (this.sqliteService.platform === 'web') {
          await this.sqliteService.saveToStore(DBCOMIC);
        }

        this.isAppInit = true;
      } catch (error) {
        console.log(`initializeAppError: ${error}`);
      }
    });
  }
}
