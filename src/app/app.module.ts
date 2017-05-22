import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import { AppComponent } from './app.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { SnackComponent } from './snack/snack.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogExampleComponent,
    SnackComponent,
  ],
  entryComponents: [
    DialogExampleComponent,
    SnackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
