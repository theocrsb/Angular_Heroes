import { Injectable } from '@angular/core';
import { Hero } from './interface.hero';
import { heroes } from './heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}
  getHeroes(): Observable<Hero[]> {
    const heroesAll = of(heroes);
    return heroesAll;
  }
}
