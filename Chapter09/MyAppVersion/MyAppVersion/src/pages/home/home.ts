import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyEnv } from '../../services/myenv';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public ver: string;

  constructor(private navCtrl: NavController, public myEnv: MyEnv) {
    this.myEnv = myEnv;
  }

  getVersion() {
    console.log(this.myEnv.getAppVersion());
    this.myEnv.getAppVersion().then((data) => this.ver = data);
  }
}

