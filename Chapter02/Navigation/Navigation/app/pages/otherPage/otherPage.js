import {Page, NavController, NavParams} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/otherPage/otherPage.html'
})
export class OtherPage {
  constructor(nav: NavController, params: NavParams) {
    this.nav = nav;
    this.params = params;
  }
  goBack() {
    this.nav.pop();
  }
  onPageWillEnter() {
    console.log('Enter OtherPage');
  }
}