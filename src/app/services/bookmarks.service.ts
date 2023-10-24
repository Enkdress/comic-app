import { SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Injectable } from '@angular/core';
import { SQLiteService } from './sqlite.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { BookmarkModel } from '../models/bookmark.model';
import { BookmarkUpgradeStatements } from '../upgrades/bookmark.upgrade.statements';
import { DbnameVersionService } from './dbname-version.service';
import { createSchema } from 'src/assets/db.schema';

@Injectable()
export class BookmarkService {
  public bookmarkList: BehaviorSubject<BookmarkModel[]> = new BehaviorSubject<
    BookmarkModel[]
  >([]);
  private databaseName: string = '';
  private db!: SQLiteDBConnection;
  private bUpdStmts: BookmarkUpgradeStatements =
    new BookmarkUpgradeStatements();
  private versionUpgrades: any;
  private loadToVersion: any;

  constructor(
    private sqliteService: SQLiteService,
    private dbVerService: DbnameVersionService
  ) {
    this.versionUpgrades = this.bUpdStmts.bookmarkUpgrades;
    this.loadToVersion =
      this.versionUpgrades[this.versionUpgrades.length - 1].toVersion;
  }

  async initializeDatabase(dbName: string) {
    this.databaseName = dbName;
    await this.sqliteService.addUpgradeStatement({
      database: this.databaseName,
      upgrade: this.versionUpgrades,
    });
    // create and/or open the database
    this.db = await this.sqliteService.openDatabase(
      this.databaseName,
      false,
      'no-encryption',
      this.loadToVersion,
      false
    );
    this.dbVerService.set(this.databaseName, this.loadToVersion);
    this.db.execute(createSchema);
    await this.getBookmarks();
  }

  async loadBookmarks() {
    const bookmarks: BookmarkModel[] = (
      await this.db.query('SELECT * FROM bookmarks;')
    ).values as BookmarkModel[];
    this.bookmarkList.next(bookmarks);
  }
  async getBookmarks() {
    await this.loadBookmarks();
  }
  async addBookmark(comic: string, profileId: number = 1) {
    const sql = `INSERT INTO bookmarks (comic) VALUES (?);`;
    await this.db.run(sql, [comic]);
    await this.getBookmarks();
  }
  async deleteBookmarkById(id: number) {
    const sql = `DELETE FROM bookmarks WHERE id=${id}`;
    await this.db.run(sql);
    await this.getBookmarks();
  }
}
