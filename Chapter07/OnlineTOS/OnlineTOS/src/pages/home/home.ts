import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private platform: any;
  public readTOS: Boolean = false;
  
  constructor(platform: Platform) {
    this.platform = platform;
  }
  
  openTOS() {
    this.readTOS = !this.readTOS;
    this.platform.ready().then(() => {
      let ref = new InAppBrowser('https://ionic.io/tos', '_blank');
      ref.on('exit').subscribe(() => {
        console.log('Exit In-App Browser');
      });
    });
  }
}