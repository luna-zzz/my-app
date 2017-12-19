import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operation/toPromise';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    constructor (private http :Http){};
    // getProject():Promise<project[]>{
    //     return this.http.get()
    // }
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  };
  getHeroesSlowly():Promise<Hero[]>{
      return new Promise( resolve=>{
          setTimeout( ()=>resolve(this.getHeroes()),2000 );
      } )
  }
}