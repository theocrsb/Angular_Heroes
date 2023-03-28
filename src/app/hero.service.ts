import { Injectable } from '@angular/core';
import { Hero } from './interface.hero';
import { heroes } from './heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}
  // Observable pour une requete async
  getHeroes(): Observable<Hero[]> {
    const heroesRequest = of(heroes);
    return heroesRequest;
  }
}
