import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import type { Observable } from 'rxjs';
import { BehaviorSubject, map, tap } from 'rxjs';
import { Led, Leds } from '../model/led';

@Injectable({
  providedIn: 'root',
})
export class LedService {
  #client = inject(HttpClient);

  #leds$$ = new BehaviorSubject<Leds>([]);

  readonly leds$ = this.#leds$$.asObservable();

  /**
   *
   * @returns
   */
  readLeds(): Observable<Leds> {
    const url =
      'https://347eb1836965ec040f474bd7f78d4730.balena-devices.com/api/colors';
    const res$ = this.#client.get<string[]>(url);
    return res$.pipe(
      map((colors) => colors.map((color, index) => ({ color, index }))),
      tap((leds) => this.#leds$$.next(leds))
    );
    return res$.pipe(
      map((value) => {
        return value.map((color, index) => {
          return {
            index,
            color,
          };
        });
      })
    );
  }

  readLed(index: string): Observable<Led> {
    const url =
      'https://347eb1836965ec040f474bd7f78d4730.balena-devices.com/api/colors';
    const res$ = this.#client.get(`${url}/${index}`, { responseType: 'text' });
    return res$.pipe(
      map((color) => {
        return {
          color,
          index: Number(index),
        };
      })
    );
  }
}
