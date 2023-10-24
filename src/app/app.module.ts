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
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

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
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
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
