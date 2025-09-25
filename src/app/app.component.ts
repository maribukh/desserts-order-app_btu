import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DessertsPageComponent } from './page/desserts-page/desserts-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DessertsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'desserts-order-app';
}
