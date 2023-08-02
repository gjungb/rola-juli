import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Leds } from '../model/led';
import { LedService } from '../shared/led.service';
import { Subscription, tap, timer } from 'rxjs';

/**
 * Stateful Component
 */
@Component({
  selector: 'pi-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.scss'],
})
export class LedListComponent implements OnInit, OnDestroy {
  #service = inject(LedService);

  #sub?: Subscription;

  leds?: Leds;

  leds$ = this.#service.leds$;

  ticker$ = timer(3_000, 5_000).pipe(tap((x) => console.log(x)));

  ngOnInit(): void {
    // this.#sub = this.ticker$.pipe(tap((x) => console.log(x))).subscribe();

    this.#service
      .readLeds()
      .pipe(tap((x) => console.log(x)))
      .subscribe((value) => {
        // effect
        this.leds = value;
      });
  }

  setRandomColor(index: number): void {
    // effect
    // this.leds![index].color = 'magenta';
    // this.leds![index] = {
    //   index,
    //   color: 'magenta',
    // };
    /* @ts-ignore */
    this.leds = this.leds?.with(index, { index, color: 'magenta' });
  }

  reloadLeds(): void {
    console.log('reload');
  }

  ngOnDestroy(): void {
    // effect
    // this.#sub?.unsubscribe();
  }
}
