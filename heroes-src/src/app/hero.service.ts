import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
/*
 import {Observable} from 'rxjs';
 import {MessageService} from './message.service';
 import {HttpClient, HttpHeaders} from '@angular/common/http';
 import {catchError} from 'rxjs/operators/catchError';
 import {tap} from 'rxjs/operators/tap';
 import {of} from 'rxjs/observable/of';

 const httpOptions = {
 headers: new HttpHeaders({'Content-Type': 'application/json'})
 };
 */
@Injectable()
export class HeroService {

  getHeroes(): Hero[] {
    return HEROES;
  }

  getHero(id: number): Hero {
    return HEROES.find(hero => hero.id === id);
  }

  /*
   private heroesUrl = 'api/heroes';

   constructor(private messageService: MessageService, private http: HttpClient) {
   }

   getHeroes(): Observable<Hero[]> {
   return this.http.get<Hero[]>(this.heroesUrl)
   .pipe(
   tap(heroes => this.log('HeroService: fetched heroes')),
   catchError(this.handleError('getHeroes', [])));
   }

   getHero(id: number): Observable<Hero> {
   const url = `${this.heroesUrl}/${id}`;
   return this.http.get<Hero>(url).pipe(
   tap(_ => this.log(`HeroService: fetched hero id=${id}`)),
   catchError(this.handleError<Hero>(`getHero id=${id}`))
   );
   }

   private log(message: string) {
   this.messageService.add('HeroService: ' + message);
   }

   private handleError<T>(operation = 'operation', result?: T) {
   return (error: any): Observable<T> => {

   // TODO: send the error to remote logging infrastructure
   console.error(error); // log to console instead

   // TODO: better job of transforming error for user consumption
   this.log(`${operation} failed: ${error.message}`);

   // Let the app keep running by returning an empty result.
   return of(result as T);
   };
   }

   updateHero(hero: Hero): Observable<any> {

   return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
   tap(_ => this.log(`updated hero id=${hero.id}`)),
   catchError(this.handleError<any>('updateHero'))
   )
   }

   addHero (hero: Hero): Observable<Hero> {
   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
   tap((hero: Hero) => this.log(`addded hero w/ id=${hero.id}`)),
   catchError(this.handleError<Hero>('addhero'))
   )
   }

   deleteHero(hero: Hero | number): Observable<Hero> {
   const id = typeof hero === 'number' ? hero : hero.id;
   const url = `${this.heroesUrl}/${id}`;
   return this.http.delete<Hero>(url, httpOptions).pipe(
   tap(_=>this.log(`deleted hero id=${id}`)),
   catchError(this.handleError<Hero>('deleteHero')))
   }

   searchHeroes(term: string): Observable<Hero[]> {
   if(!term.trim()) {
   return of([]);
   }
   return this.http.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
   tap(_=>this.log(`found heroes matching ${term}`)),
   catchError(this.handleError<Hero[]>('searchHeroes', []))
   );
   }
   */
}
