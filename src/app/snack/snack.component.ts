import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snack',
  template: `
    <p>
      I am Snack Component !!!
    </p>
  `,
  styles: []
})
export class SnackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
