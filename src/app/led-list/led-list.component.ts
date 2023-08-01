import { Component, OnInit, inject } from '@angular/core';
import { Leds } from '../model/led';
import { LedService } from '../shared/led.service';
import { tap } from 'rxjs';

/**
 * Stateful Component
 */
@Component({
  selector: 'pi-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.scss'],
})
export class LedListComponent implements OnInit {
  #service = inject(LedService);

  leds?: Leds;

  ngOnInit(): void {
    this.#service
      .readLeds()
      .pipe(tap((x) => console.log(x)))
      .subscribe((value) => {
        // effect
        this.leds = value;
      });
  }
}
