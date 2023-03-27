import { Component } from '@angular/core';
import { heroes } from '../heroes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  heroes = [...heroes.slice(0, 4)];
}
