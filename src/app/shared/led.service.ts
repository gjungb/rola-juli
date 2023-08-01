import { Injectable, inject } from '@angular/core';
import { Leds } from '../model/led';
import type { Observable } from 'rxjs';
import { delay, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LedService {
  #client = inject(HttpClient);

  readLeds(): Observable<Leds> {
    const url =
      'https://347eb1836965ec040f474bd7f78d4730.balena-devices.com/api/colors';
    const res$ = this.#client.get<string[]>(url);
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
}
