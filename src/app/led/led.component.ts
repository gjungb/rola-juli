import { Component, Input } from '@angular/core';
import { Led } from '../model/led';

/**
 * Stateless / Representational Component
 */
@Component({
  selector: 'pi-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss'],
})
export class LedComponent {
  @Input({
    required: true,
  })
  led!: Led;
}
