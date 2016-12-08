import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/thankyou/thankyou.html'
})
export class ThankyouPage {
  private nav: any;
  private params: any;
  private token: string = '';
  
  constructor(nav: NavController, params: NavParams) {
    this.params = params;
    this.nav = nav;
    this.token = this.params.get('token');
    console.log('Getting token param:');
    console.log(this.token);
  }

}
