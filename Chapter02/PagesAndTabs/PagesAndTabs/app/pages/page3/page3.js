import {Page, Platform} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/page3/page3.html'
})
export class PageThree {
  constructor(platform: Platform) {
    this.platform = platform;
    this.isAndroid = platform.is('android');
  }
  onPageWillEnter() {
    console.log('Enter Page 3');
  }
  
  onSlideChanged(e) {
    console.log('You are on Slide ' + (e.activeIndex + 1));
  }
}