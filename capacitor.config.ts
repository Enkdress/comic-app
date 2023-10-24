import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'comic-app',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    SQLite: {
      syncDatabase: {
        name: 'marvel_comics_db',
      },
    },
  },
};

export default config;
