import { Routes } from '@angular/router';
import {Home} from './features/pages/home/home';
import {Detail} from './features/pages/detail/detail';
import {Favorite} from './features/pages/favorite/favorite';
import { NotFound } from './features/pages/error-page/error-page';


export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'detail',
    component: Detail,
  },
  {
    path: 'favorite',
    component: Favorite,
  },
  {
    path: '**',
    component: NotFound
  }
];

// export const routes: Routes = [
//   { path: '', pathMatch: 'full', component: Home },
//   ...filmDetailsRoutes,
//   ...aboutRoutes,
//   ...favoritesRoutes,
//   ...notFoundRoutes,
//   { path: '**', redirectTo: '404'},
// ];

// export const favoritesRoutes: Routes = [
//   {
//     path: "favorites",
//     loadComponent: async () => {
//       const m = await import("../pages/favorites/favorites");
//       return m.Favorites;
//     },
//   },
// ];

