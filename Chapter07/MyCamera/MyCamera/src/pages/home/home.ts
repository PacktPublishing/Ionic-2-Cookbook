import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public imageData: string;
  @Input('useURI') useURI: Boolean = true;
  
  constructor(public navCtrl: NavController) {
  }
  
  getPicture(sourceType){
    Camera.getPicture({
        quality: 50,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        saveToPhotoAlbum: false,
        destinationType: this.useURI ? Camera.DestinationType.FILE_URI : Camera.DestinationType.DATA_URL,
        targetWidth: 800,
        targetHeight: 800,
        sourceType: sourceType
    }).then((imageData) => {
        if (this.useURI) {
          this.imageData = imageData;
        } else {
          this.imageData = "data:image/jpeg;base64," + imageData;
        }
    }, (err) => {
        console.log(err);
    });
  }  
}
