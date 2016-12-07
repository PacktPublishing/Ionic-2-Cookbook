import {Page, Platform} from 'ionic/ionic';
import {PageTwo} from '../page2/page2';
import {PageThree} from '../page3/page3';

@Page({
  template: '' +
  '<ion-navbar *navbar hideBackButton [attr.royal]="isAndroid ? \'\' : null">' +
  '<ion-title>Page 1</ion-title>' +
  '</ion-navbar>' +
  '<ion-content>' +
  '<ion-col><h3>This page is intended to be blank</h3></ion-col>' +
  '</ion-content>'
})
class PageOne {
  constructor(platform: Platform) {
    this.platform = platform;
    this.isAndroid = platform.is('android');
  }
  onPageWillEnter() {
    console.log('enter');
  }
}

@Page({
  template:
  `<ion-tabs class="tabs-icon-text">
    <ion-tab tabIcon="water" tabTitle="One" [root]="pageOne"></ion-tab>
    <ion-tab tabIcon="leaf" tabTitle="Two" [root]="pageTwo"></ion-tab>
    <ion-tab tabIcon="flame" tabTitle="Three" [root]="pageThree"></ion-tab>
  </ion-tabs>`,
})

// It's OK to put comments here
// But you cannot have code between decorator and class

export class TabsPage {
  constructor() {
    this.pageOne = PageOne;
    this.pageTwo = PageTwo;
    this.pageThree = PageThree;
  }

  onPageWillLeave() {
  }

}
