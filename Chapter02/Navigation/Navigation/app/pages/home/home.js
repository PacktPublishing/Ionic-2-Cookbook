import {Page, NavController, NavParams} from 'ionic/ionic';
import {OtherPage} from '../otherPage/otherPage'

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(nav: NavController) {
    this.nav = nav;
    this.myString = 'Example 1 - This is just a string';
    this.myJSON = {text: ''};
    this.otherPage = OtherPage;
  }
  gotoOtherPage() {
    this.nav.push(OtherPage, {text: 'Example 3 - This is an object'});
  }
}