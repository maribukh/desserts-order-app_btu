import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-dessert-item',
  standalone: true,
  templateUrl: './dessert-item.component.html',
  styleUrls: ['./dessert-item.component.css'],
  imports: [NgIf],
})
export class DessertItemComponent implements OnInit {
  @Input() dessert: any;
  quantity = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    if (!this.dessert) return;
    this.quantity = this.cartService.getItemQuantity(this.getId());
    this.cartService.cart$.subscribe(() => {
      this.quantity = this.cartService.getItemQuantity(this.getId());
    });
  }

  private getId(): string | number {
    return this.dessert?.id ?? this.dessert?.name;
  }

  addToCart() {
    this.quantity = 1;
    this.cartService.addItem(this.dessert, 1);
  }

  increment() {
    this.quantity++;
    this.cartService.updateQuantity(this.getId(), this.quantity);
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
      this.cartService.updateQuantity(this.getId(), this.quantity);
    } else {
      this.quantity = 0;
      this.cartService.removeItem(this.getId());
    }
  }
}
