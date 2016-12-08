import {Page, NavController, NavParams} from 'ionic-angular';
import {ThankyouPage} from '../thankyou/thankyou'
declare var Stripe: any;

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  private nav: any;
  private params: any;
  private token: string = '';
  private status: any;
  private response: any;
  
  constructor(nav: NavController, params: NavParams) {
    this.params = params;
    this.nav = nav;
    console.log(Stripe);
    Stripe.setPublishableKey('YOUR STRIPE PUBLIC KEY HERE');
  }
  
  onSubmit(myForm) {
    console.log(myForm);
    Stripe.card.createToken({
      number: myForm.value.cc, //'4242424242424242',
      cvc: myForm.value.cvc, //'123',
      exp_month: myForm.value.month, //12,
      exp_year: myForm.value.year, //2017,
      amount: 2000
    }, (status, response) => this.stripeResponseHandler(status, response));
  }
  
  stripeResponseHandler(status, response) {

    if (response.error) {
      // Show the errors on the form
      console.log('error');
      console.log(response.error.message);
    } else {
      // response contains id and card, which contains additional card details
      this.token = response.id;
      // Insert the token into the form so it gets submitted to the server
      console.log('success');
      console.log('Sending token param:');
      console.log(this.token);
      this.nav.push(ThankyouPage, {token: this.token});
    }
  }

}
