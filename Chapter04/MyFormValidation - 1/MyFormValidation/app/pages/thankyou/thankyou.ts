import {Page} from 'ionic-angular';
import {MyFormService} from '../../services/myform'

@Page({
  templateUrl: 'build/pages/thankyou/thankyou.html'
})
export class ThankyouPage {
  private formData: MyFormService;
  
  constructor(formData: MyFormService) {
    this.formData = formData;
  }

}
