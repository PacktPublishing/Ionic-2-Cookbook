import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../services/user';
import { Page1 } from '../page1/page1';

@Component({
  selector: 'page-two',
  templateUrl: 'page2.html'
})
export class Page2 {
  private user: any;
  private nav: any;
  
  constructor(public navCtrl: NavController, user: UserService, nav: NavController) {
    console.log(user.name);
    this.user = user;
    this.nav = nav;
  }
  
  goToPage1(){
    this.nav.push(Page1);
  }
}
