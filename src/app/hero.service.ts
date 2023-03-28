import { Injectable } from '@angular/core';
import { Hero } from './interface.hero';
import { heroes } from './heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}
  // Observable pour une requete async
  getHeroes(): Observable<Hero[]> {
    const heroesRequest = of(heroes);
    this.messageService.add('HeroService: fetched heroes');
    return heroesRequest;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = heroes.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
