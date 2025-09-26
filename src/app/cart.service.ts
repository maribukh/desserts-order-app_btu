import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface CartItem {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  raw?: any; // original dessert object if needed
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  private idOf(dessert: any) {
    return dessert?.id ?? dessert?.name;
  }

  addItem(dessert: any, quantity: number = 1) {
    const id = this.idOf(dessert);
    const existing = this.items.find(i => i.id === id);
    const price = Number(dessert.price) || 0;
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({
        id,
        name: dessert.name,
        price,
        quantity,
        image: dessert.image?.desktop ?? '',
        raw: dessert
      });
    }
    this.cartSubject.next(this.items.slice());
  }

  updateQuantity(dessertId: string | number, quantity: number) {
    const item = this.items.find(i => i.id === dessertId);
    if (!item) return;
    item.quantity = quantity;
    if (item.quantity <= 0) {
      this.removeItem(dessertId);
    } else {
      this.cartSubject.next(this.items.slice());
    }
  }

  removeItem(dessertId: string | number) {
    this.items = this.items.filter(i => i.id !== dessertId);
    this.cartSubject.next(this.items.slice());
  }

  clear() {
    this.items = [];
    this.cartSubject.next([]);
  }

  getCart() {
    return this.items.slice();
  }

  getItemQuantity(dessertId: string | number) {
    const item = this.items.find(i => i.id === dessertId);
    return item ? item.quantity : 0;
  }

  getTotal() {
    return this.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }
}
