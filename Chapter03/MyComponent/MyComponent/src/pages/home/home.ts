import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyComponent } from '../../components/foo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

}
