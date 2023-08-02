import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LedComponent } from './led/led.component';
import { LedListComponent } from './led-list/led-list.component';
import { PiColorPipe } from './shared/pi-color.pipe';
import { ControlsComponent } from './controls/controls.component';
import { DetailComponent } from './detail/detail.component';
import { ColorFormComponent } from './color-form/color-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LedComponent,
    LedListComponent,
    PiColorPipe,
    ControlsComponent,
    DetailComponent,
    ColorFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
