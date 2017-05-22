# angular2material2

## Installation

### Install angular-cli
Install angular-cli using https://www.npmjs.com/package/@angular/cli

## Create Application
Create an application using `ng new material2-demo`, this would create a sample angular application and install, build the application.  Run the application by using `ng serve`.

## Angular Material installation
Install below packages

1. @angular/material
2. @angular/animations
3. hammerjs - If you plan on using slide toggle or slider, these components have a dependency on hammerjs. If you don’t plan on it, you can skip to the next paragraph.
4. @types/hammerjs

## Adding a new component for Dailog Popup
* creating a new component, add in-line styling, don’t add template and don’t add spec file `ng generate component -is -it --no-spec dialog-example`.
* In your app.module.ts file, though the cli will now include the component you’ve generated in your imports and add it into your declarations array for @NgModule, you’ll need to add a new array called entryComponents and include the DialogExampleComponent (or whichever component you are using to display the dialog) in there. If you don’t add it, your dialog just won’t pop up!

* Add a new component for snack bar like above

---

# Generated Readme.md
## Material2Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
