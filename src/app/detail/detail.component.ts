import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LedService } from '../shared/led.service';
import { Observable } from 'rxjs';
import { Led } from '../model/led';

@Component({
  selector: 'pi-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  #route = inject(ActivatedRoute);

  #service = inject(LedService);

  led$?: Observable<Led>;

  ngOnInit(): void {
    const index = this.#route.snapshot.paramMap.get('index') as string;

    this.led$ = this.#service.readLed(index);
  }
}
