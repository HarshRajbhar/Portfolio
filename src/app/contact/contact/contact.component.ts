import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  validationForNumber(event: KeyboardEvent) {
    const isNumber = event.key;
    console.log(isNumber);

    if (isNumber === 'Backspace') {
      return;
    }
    if (typeof isNumber !== 'undefined' && isNaN(+isNumber)) {
      event.preventDefault();
    }
  }
}
