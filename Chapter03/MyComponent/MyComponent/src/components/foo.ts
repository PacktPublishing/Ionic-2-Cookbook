import { Component } from '@angular/core';

@Component({
  selector: 'my-component',
  templateUrl: 'foo.html'
})
export class MyComponent {
  public data: any = {myToggle: true};

  constructor() {
  }
  
  isClicked(val) {
    console.log('Vegetarian: ' + val);
  }

}