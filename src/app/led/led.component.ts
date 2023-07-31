import { Component } from '@angular/core';
import { Led } from '../model/led';

@Component({
  selector: 'pi-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss'],
})
export class LedComponent {
  led: Led = {
    index: 0,
    color: 'red',
  };
}
