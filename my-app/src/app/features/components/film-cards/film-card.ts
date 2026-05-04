import {Component,input, model, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'product-card',
  standalone: true,
  styles: `
      .card {
      background: #fff;
      border-radius: 12px;
      padding: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      .card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.12);
      }

      img {
      width: 100%;
      height: 260px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 16px;
      margin: 6px 0;
    }

    p {
      margin: 2px 0;
      font-size: 14px;
      color: #555;
    }

    .favorite {
      display: inline-block;
      cursor: pointer;
    }
    .favorite input {
      display: none;
    }
    .favorite .heart::before {
      content: "♡";
      font-size: 20px;
      color: #aaa;
      transition: 0.2s;
    }

    .favorite input:checked + .heart::before {
      content: "❤️";
      color: red;
    }

    .favorite:hover .heart::before {
      transform: scale(1.1);
    }
  `,
  template: `
    <div class="card">
      <img [src]="posterUrl()" />
      <h2>{{title() }}</h2>
      <p>{{year() }} / {{genre() }}</p>
      <p>⭐{{rating() }}</p>
      <div class="meta">
        <label class="favorite">
          <input
            type="checkbox"
            [checked]="checked()"
            (change)="toggle()"
          />
          <span class="heart"></span>
        </label>
     </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProductCard {
  posterUrl = input.required<string>();
  title = input.required<string>();
  year = input.required<number>();
  genre = input.required<string>();
  rating = input.required<number>();
  isFavorite = input<boolean>(false);
  checked = model.required<boolean>();

  toggle() {
  this.checked.set(!this.checked());
  }
}
