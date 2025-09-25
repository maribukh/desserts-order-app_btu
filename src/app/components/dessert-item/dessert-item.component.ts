import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dessert-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dessert-item.component.html',
  styleUrls: ['./dessert-item.component.css'],
})
export class DessertItemComponent {
  @Input() dessert!: any;
}
