import {Page, Platform} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/page2/page2.html'
})
export class PageTwo {
  constructor(platform: Platform) {
    this.platform = platform;
    this.isAndroid = platform.is('android');
  }
  onPageWillEnter() {
    console.log('Enter Page 2');
  }
}