import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('myslides') myslides;
  @ViewChild('slidefloat1') slidefloat1;
  @ViewChild('slidefloat2') slidefloat2;
  @ViewChild('slidefloat3') slidefloat3;
  private rAf: any;
  private bindOnProgress: boolean = false;
  
  constructor(public navCtrl: NavController) {
    this.rAf = (function(){
      return  (window as any).requestAnimationFrame || (window as any).webkitRequestAnimationFrame || (window as any).mozRequestAnimationFrame ||
        function( callback ){
          window.setTimeout(callback, 1000 / 60);
        };
    })();
  }
  
  onMove() {
    if (!this.bindOnProgress) {
      this.bindOnProgress = true;
      
      this.myslides.slider.on('onProgress', (swiper, progress) => {
        
        // (0, 1) - (0.25, 0) ==> (0-1)/(0.25-0) => -1/0.25 * x + 1
        let firstQuarter = () => {
          let slidefloat1Opacity = -1/0.25 * progress + 1;
          console.log('slidefloat1Opacity: ' + slidefloat1Opacity);
          this.slidefloat1.nativeElement.style.opacity =  slidefloat1Opacity;
          this.slidefloat2.nativeElement.style.opacity = 0;
        }
        
        // (0.25, 0) - (0.5, 1) ==> (1-0)/(0.5-0.25) => 1/0.25 * x - 1 = 4*x - 1
        let secondQuarter = () => {
          let slidefloat2Opacity = 4 * progress - 1;
          console.log('slidefloat2Opacity: ' + slidefloat2Opacity);
          this.slidefloat2.nativeElement.style.opacity =  slidefloat2Opacity;
          this.slidefloat2.nativeElement.style.transform = 'translateY(0px)';
          this.slidefloat1.nativeElement.style.opacity = 0;
        }
        
        // (0.5, 0) - (0.75, -250) ==> (-250-0)/(0.75-0.5) = -250/0.25 => -1000*x + 500
        let thirdQuarter = () => {
          let slidefloat2transform = -1000 * progress + 500;
          console.log('slidefloat2transform: ' + slidefloat2transform);
          this.slidefloat2.nativeElement.style.transform = 'translateY(' + slidefloat2transform + 'px)';
          this.slidefloat3.nativeElement.style.opacity = 0;
        }
        
        // (0.75, 0) - (1, 1) ==> (1-0)/(1-0.75) => 1/0.25 * x - 0.75*4 = 4*x - 3
        let fourthQuarter = () => {
          let slidefloat3Opacity = 4 * progress - 3;
          console.log('slidefloat3Opacity: ' + slidefloat3Opacity);
          this.slidefloat3.nativeElement.style.opacity = slidefloat3Opacity;
          this.slidefloat2.nativeElement.style.transform = 'translateY(-250px)';
        }
        
        // Animate per quarter of the total 3 slides
        if (progress <= 0.25) { 
          this.rAf(firstQuarter);
        } else if ((progress > 0.25) && (progress <= 0.5 )) {
          this.rAf(secondQuarter);
        } else if ((progress > 0.5) && (progress <= 0.75 )) {
          this.rAf(thirdQuarter);
        } else if ((progress > 0.75) && (progress <= 1 )) {
          this.rAf(fourthQuarter);
        }
        
      });
      
    }
    
  }
}
