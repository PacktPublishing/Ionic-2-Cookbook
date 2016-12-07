import {App, Platform} from 'ionic/ionic';
import {TabsPage} from './pages/tabs/tabs';

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  constructor(platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {

    });
  }
}
