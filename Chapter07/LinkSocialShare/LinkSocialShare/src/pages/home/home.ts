import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {
  }
  
  sendShare(message, subject, url) {
    SocialSharing.share(message, subject, null, url);
  }
}
