import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dessert-item',
  standalone: true,
  templateUrl: './dessert-item.component.html',
  styleUrls: ['./dessert-item.component.css'],
})
export class DessertItemComponent {
  @Input() dessert: any;
}
