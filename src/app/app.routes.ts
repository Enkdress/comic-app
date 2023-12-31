import { Routes } from '@angular/router';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'map',
        loadChildren: () =>
          import('./pages/map/map.module').then((m) => m.MapPageModule),
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./pages/login/login.module').then((m) => m.LoginPageModule),
      },
      {
        path: 'sign-up',
        loadChildren: () =>
          import('./pages/signup/signup.module').then(
            (m) => m.SignupPageModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./pages/profile/profile.module').then(
            (m) => m.ProfilePageModule
          ),
      },
      {
        path: 'comic/:slug',
        loadChildren: () =>
          import('./pages/comic/comic.module').then((m) => m.ComicPageModule),
      },
    ],
  },
];

export default routes;
