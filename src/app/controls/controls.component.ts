import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pi-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent {
  @Output()
  relaod = new EventEmitter<void>();

  handleReload(): void {
    this.relaod.emit();
  }
}
