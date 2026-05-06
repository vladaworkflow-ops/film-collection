import {Component, computed, inject, signal} from '@angular/core';
import { Search } from '../../components/search/search';
import { FilmService } from '../../../services/film-service';
import { FilmCard } from '../../components/film-cards/film-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Search, FilmCard],
  styles:  `.card-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 20px;
    }`,
  template: `
    <app-search (searchFilm)="updateSearchFilm($event)"></app-search>

    @if(filteredFilms(); as films){
    <div class="card-container">
      @for(film of films; track film.id){
        <app-film-card
        [film]="film"
        ></app-film-card>
      }
    </div>
    }

  `
})
export class Home {
  filmService = inject(FilmService);
  searchValue = signal<string>("");

  // consrtuctor(private: service: Service) {
  // }

  updateSearchFilm(str: string) {
    this.searchValue.update(() => str);
  }

    filteredFilms = computed(() => {
    const value = this.searchValue().trim().toLocaleLowerCase();

    return this.filmService.films().filter((film) => {
      return film.title.toLowerCase().includes(value);
    });
  });

}
