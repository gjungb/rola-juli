import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Led } from '../model/led';

/**
 * Stateless / Representational Component
 */
@Component({
  selector: 'pi-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LedComponent {
  /**
   *
   */
  @Input({
    required: true,
  })
  led!: Led;

  /**
   *
   */
  @Output()
  colorChange = new EventEmitter<number>();

  /**
   *
   * @param ev
   */
  handleColorClick(ev: MouseEvent): void {
    // effect
    console.log('clicked', ev.offsetX);
    this.colorChange.emit(this.led.index);
  }
}
