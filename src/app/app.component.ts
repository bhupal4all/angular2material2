import { Component } from '@angular/core';
import { MdDialog } from "@angular/material";
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MdSnackBar } from '@angular/material';
import { SnackComponent } from './snack/snack.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular2 + Material2';
  constructor(public dialog: MdDialog, public snackBar: MdSnackBar) {

  }

  openDialog() {
    this.dialog.open(DialogExampleComponent);
  }

  openSnackBar() {
    this.snackBar.open("hey, I am snack bar", "close", {
      duration: 2000,
    });
  }

  openSnackComponentBar() {
    this.snackBar.openFromComponent(SnackComponent, {
      duration: 2000,
    });
  }
}
