import { Component } from '@angular/core';
// Retrait de l'import direct. On passe desormais par le service
// import { heroes } from '../heroes';
import { Hero } from '../interface.hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {}
  // subscribe pour gerer l'async
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  ngOnInit(): void {
    this.getHeroes();
  }

  selectedHero?: Hero;
  // on attribu le hero select pour le l'afficher
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
