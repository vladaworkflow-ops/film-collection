import {Component} from '@angular/core';
import { Search } from '../../search/search';
import {FilmList} from '../../components/film-list/film-list';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div>Home Page</div>
    <app-search></app-search>
    <app-film-list></app-film-list>
  `,
  imports: [Search, FilmList]
})
export class Home {}
