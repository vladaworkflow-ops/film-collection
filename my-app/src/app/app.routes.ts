import { Routes } from '@angular/router';
import {Home} from './features/pages/home/home';
import {Detail} from './features/pages/detail/detail';
import { NotFound } from './features/pages/error-page/error-page';


export const routes: Routes = [
  {
    path: '',
    title: "Home Page",
    component: Home,
  },
  {
    path: 'detail',
    title: "Detail Page",
    component: Detail,
  },
  {
    path: '**',
    component: NotFound
  }
];
