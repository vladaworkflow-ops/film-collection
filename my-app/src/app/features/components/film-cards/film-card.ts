import {Component,input, model, ChangeDetectionStrategy, inject} from '@angular/core';
import { Film } from '../../../service/data/films';
import { FilmService } from '../../../services/film-service';

@Component({
  selector: 'app-film-card',
  standalone: true,
  styleUrl: 'cards.css',
  template: `
  @if(film(); as film){
    <div class="card">
      <img [src]="film.posterUrl" />
      <h2>{{film.title }}</h2>
      <p>{{film.year }} / {{film.genre }}</p>
      <p>⭐{{film.rating }}</p>
      <div class="meta">
        <label [class.favorite]="!film.isFavorite">
          <input
            type="checkbox"
            [checked]="checked()"
            (change)="toggle(film.id)"
          />
          <span class="heart"></span>
        </label>
     </div>
    </div>
  }

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FilmCard {

  film = input.required<Film>();

  filmService = inject(FilmService)
  toggle(id: number) {
    this.filmService.toggleFavorite(id)
  }

  checked() {
  }

}
