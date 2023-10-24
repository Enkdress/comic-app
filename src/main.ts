import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { defineCustomElements as jeepSqlite } from 'jeep-sqlite/loader';
import { Capacitor } from '@capacitor/core';
import { InitializeAppService } from './app/services/initialize.app.service';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}
// --> Below only required if you want to use a web platform
const platform = Capacitor.getPlatform();
if (platform === 'web') {
  // Web platform
  // required for toast component in Browser

  // required for jeep-sqlite Stencil component
  // to use a SQLite database in Browser
  jeepSqlite(window);

  window.addEventListener('DOMContentLoaded', async () => {
    const jeepEl = document.createElement('jeep-sqlite');
    document.body.appendChild(jeepEl);
    jeepEl.autoSave = true;
  });
}
// Above only required if you want to use a web platform <--

// Define the APP_INITIALIZER factory
export function initializeFactory(init: InitializeAppService) {
  return () => init.initializeApp();
}

platformBrowserDynamic().bootstrapModule(AppModule);
