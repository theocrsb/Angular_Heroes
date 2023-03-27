import { Injectable } from '@angular/core';
import { Hero } from './interface.hero';
import { heroes } from './heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}
  getHeroes(): Hero[] {
    return heroes;
  }
}
