import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<password-meter [title]="title"></password-meter>`,
})
export class AppComponent  { 
	title = 'Password Complexity Meter';
}
