import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import tinycolor from 'tinycolor2';

interface ColorFormValue {
  color: string;
}

@Component({
  selector: 'pi-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.scss'],
})
export class ColorFormComponent implements OnInit {
  form!: FormGroup;

  #colorValidator: ValidatorFn = (control) => {
    return tinycolor(control.value).isValid()
      ? null
      : {
          color: 'Invalid color string',
        };
  };

  ngOnInit(): void {
    this.form = new FormGroup({
      color: new FormControl<string | null>(null, {
        validators: [
          Validators.required,
          Validators.minLength(3),
          this.#colorValidator,
        ],
        updateOn: 'change',
      }),
    });
  }

  updateColor(value: ColorFormValue): void {
    // effect
  }
}
