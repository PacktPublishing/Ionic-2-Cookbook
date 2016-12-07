import { Injectable } from '@angular/core';
import { AppVersion } from 'ionic-native';

@Injectable()
export class MyEnv {
  public appVersion: any;
  
  constructor() {
    this.appVersion = AppVersion;
  }

  getAppVersion() {
    return this.appVersion.getVersionCode();
  }
}