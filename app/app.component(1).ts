import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '
    <input type="checkbox" [(ngModel)]="isChecked"/> <label>동의</label> <input type="button" (click)="confirmMe()">Click Me!</button>
  '
})
export class AppComponent {
  isChecked: boolean;

  constructor() {
    this.isChecked = true;
  }

  confirmMe() {
    alert('동의 여부: ' + this.isChecked);
  }
}
