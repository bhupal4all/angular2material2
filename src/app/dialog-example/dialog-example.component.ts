import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-example',
  template: `
    <h1 md-dialog-title class="primary-color">i am title</h1>
    <md-dialog-content class="accent-color">hey this is the content of the dialog</md-dialog-content>
    <md-dialog-actions>
      <button md-raised-button color="primary" md-dialog-close>
        close button
      </button>  
    </md-dialog-actions>
  `,
  styles: []
})
export class DialogExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
