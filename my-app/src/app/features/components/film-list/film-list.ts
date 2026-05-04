import {Component} from '@angular/core';
import {ProductCard} from '../film-cards/film-card';
import { films } from '../../../service/data/films';

@Component ({
  selector: 'app-film-list',
  standalone: true,
  imports: [ProductCard],
  styles: `
    :host {
    display: block;
    padding: 20px;
    }

    h1 {
      margin-bottom: 20px;
    }

    .card-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 20px;
    }

    p {
      text-align: center;
      color: #777;
    }
  `,
  template: `
  <h1>Films Founder</h1>
    <div class="card-container">
    @for (film of films; track film.id) {
    <product-card
      [posterUrl]="film.posterUrl"
      [title]="film.title"
      [year]="film.year"
      [genre]="film.genre"
      [rating]="film.rating"
      [isFavorite]="film.isFavorite"
      [(checked)]="film.isFavorite"
    >
    </product-card>
    } @empty {
    <p>There are no films.</p>
    }
    </div>
  `,
})

export class FilmList {
  films = films;
}
