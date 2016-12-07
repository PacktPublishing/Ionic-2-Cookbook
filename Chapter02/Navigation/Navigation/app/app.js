import {App, Platform} from 'ionic/ionic';
import {HomePage} from './pages/home/home';

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  constructor(platform: Platform) {
    this.rootPage = HomePage;

    platform.ready().then(() => {
    });
  }
}
