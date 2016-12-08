import {Page} from 'ionic-angular';
import {QuoteService} from '../../services/quote'

@Page({
  templateUrl: 'build/pages/home/home.html',
  providers: [QuoteService]
})
export class HomePage {
  public quotes: any;
  
  constructor(quotes: QuoteService) {
    this.quotes = quotes;
    this.quotes.getQuotes();
  }

}
