import { Component } from '@angular/core';
import { heroes } from '../heroes';
import { Hero } from '../interface.hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes = [...heroes];
  selectedHero?: Hero;
  // on attribu le hero select pour le l'afficher
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
