import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dessert-item',
  standalone: true,
  templateUrl: './dessert-item.component.html',
  styleUrls: ['./dessert-item.component.css'],
  imports: [NgIf],
})
export class DessertItemComponent {
  @Input() dessert: any;
  quantity = 0;

  addToCart() {
    this.quantity = 1;
  }

  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    } else {
      this.quantity = 0;
    }
  }
}
