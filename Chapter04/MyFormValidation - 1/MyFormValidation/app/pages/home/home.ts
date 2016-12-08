import {Page, NavController, NavParams} from 'ionic-angular';
import {ThankyouPage} from '../thankyou/thankyou'
import {MyFormService} from '../../services/myform'

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  private nav: any;
  private data: any;
  private formData: MyFormService;
  private isSubmitted: Boolean = false;
  
  constructor(nav: NavController, formData: MyFormService) {
    this.nav = nav;
    this.formData = formData;
    this.data = {
      name: '',
      phone: '',
      comment: '',
      tos: false
    }
  }
  
  onSubmit(myForm) {
    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(myForm);
    
    if ((myForm.valid) && (myForm.value.tos)) {
      this.formData.name = this.data.name;
      this.formData.phone = this.data.phone;
      this.formData.comment = this.data.comment; 
      this.nav.push(ThankyouPage);
    }
  }
  
  noSubmit(e) {
    e.preventDefault();
  }
}
