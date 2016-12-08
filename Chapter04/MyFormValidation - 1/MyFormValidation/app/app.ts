import 'es6-shim';
import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {MyFormService} from './services/myform'


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [MyFormService],
  config: {} 
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}
