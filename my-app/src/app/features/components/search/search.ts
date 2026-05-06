import {Component, output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { signal } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  styleUrl: 'search.css',
  template: `
    <div class="film-search">

      <label class="film-search-label" for="search">
        Find film
      </label>

      <div class="film-search-controls">
        <!-- [value]="searchFilm()" -->
        <input
          id="search"
          type="text"
          class="film-search-input"
          (input)="onInput($event)"
          placeholder="Type film name..."
        />

        <!-- <button class="film-search-button" (click)="showFilm()">
          Search
        </button> -->

      </div>

      <!-- <p class="film-search-result">
        You are searching for: <strong>{{ result() }}</strong>
      </p> -->
    </div>
  `,
  imports: [FormsModule],
})

export class Search{
  // @Output() v:typ = new EventEmitter()
  searchFilm = output<string>();
  result = signal<string>('');

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement
    this.searchFilm.emit(input.value);
  }

  // showFilm(){
  //   this.result = this.searchFilm
  // }
}
