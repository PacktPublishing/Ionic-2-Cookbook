import {App, IonicApp} from 'ionic/ionic';
import {PageOne} from './pages/page1/page1';
import {PageTwo} from './pages/page2/page2';

@App({
  templateUrl: 'build/app.html'
})
class MyApp {
  constructor(app: IonicApp) {
    this.app = app;

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Page One', component: PageOne },
      { title: 'Page Two', component: PageTwo }
    ];
    
    this.text = '';

    this.rootPage = PageOne;
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
  
  rightMenuClick(text) {
    this.text = text;
  }

}
