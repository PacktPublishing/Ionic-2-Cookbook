import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var dynamics: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private isAnimating: Boolean = false;
  private isQuoteShown: Boolean = false;
  @ViewChild('myCard') myCard; 
  
  constructor(public navCtrl: NavController) {
    console.log(dynamics);
  }
  
  animateMe(el) {
    
    if (!this.isAnimating) {
      this.isAnimating = true;
      
      dynamics.animate(el._elementRef.nativeElement, {
        translateY: -50
      }, {
        type: dynamics.bounce,
        duration: 1300,
        complete: () => {
          console.log('Done animating button.');
          this.isAnimating = false;  
        }
      });
      
      if (!this.isQuoteShown) {
        dynamics.animate(this.myCard.nativeElement, {
          translateY: 0
        }, {
          type: dynamics.spring,
          duration: 1300,
          complete: () => {
            console.log('Done animating drop down.');
            this.isAnimating = false;  
          }
        });
        
        this.isQuoteShown = true;
      } else {
        dynamics.animate(this.myCard.nativeElement, {
          translateY: -150
        }, {
          type: dynamics.easeOut,
          duration: 900,
          friction: 50,
          complete: () => {
            console.log('Done animating drop down.');
            this.isAnimating = false;  
          }
        });
          
        this.isQuoteShown = false;
      }
      
    }
  }
  
}
