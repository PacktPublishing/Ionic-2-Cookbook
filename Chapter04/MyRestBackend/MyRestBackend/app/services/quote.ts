import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class QuoteService {
  private http: any;
  public data: any;
  
  constructor(http: Http) {
    this.http = http;
  }
  
  getQuotes() {
    this.http.get("http://localhost:8080/test.json")
      .subscribe(res => {
        this.data = JSON.parse(res._body);
        console.log(this.data);
      }, error => {
        console.log(error);
      });
  }
  
}