import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MarvelService } from './services/marvel.service';
import { HttpClientModule } from '@angular/common/http';
import { SQLiteService } from './services/sqlite.service';
import { BookmarkService } from './services/bookmarks.service';
import { InitializeAppService } from './services/initialize.app.service';
import { DbnameVersionService } from './services/dbname-version.service';

// Define the APP_INITIALIZER factory
export function initializeFactory(init: InitializeAppService) {
  return () => init.initializeApp();
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    MarvelService,
    SQLiteService,
    BookmarkService,
    DbnameVersionService,
    InitializeAppService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeFactory,
      deps: [InitializeAppService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
