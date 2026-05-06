import { Injectable, signal } from '@angular/core';
import { Film, films } from '../service/data/films';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  readonly films = signal<Film[]>(films);

    toggleFavorite(id: number): void {
    this.films.update((films) =>
      films.map((film) => film.id === id ? { ...film, isFavorite: !film.isFavorite } : film)
    );
  }

    getFilmById(id: number): Film | undefined {
    return this.films().find((film) => film.id === id);
  }

}
