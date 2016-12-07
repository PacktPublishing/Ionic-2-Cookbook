import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  public email: string = "";
  public password: string = "";
  public name: string = "";
  public birthday: string = "";

  constructor(public navCtrl: NavController, public auth: Auth, public user: User, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    this.initProfile();
  }

  private initProfile() {
    if (this.auth.isAuthenticated()) {
      this.name = this.user.get('name', '');
      this.birthday = this.user.get('birthday', '');
    }
  }

  register() {
    let details: UserDetails = {'email': this.email, 'password': this.password};

    let loader = this.loadingCtrl.create({
      content: "Registering user..."
    });
    loader.present();    

    this.auth.signup(details).then(() => {
      console.log('User is now registered');
      console.log(this.user);
      loader.dismiss();
      return this.auth.login('basic', {'email': this.email, 'password': this.password});

    }, (err: IDetailedError<string[]>) => {
      loader.dismiss();
      
      for (let e of err.details) {
        if (e === 'conflict_email') {
          alert('Email already exists.');
        } else {
          alert('Error creating user.');
        }
      }
    });
  }

  login() {
    let details: UserDetails = {'email': this.email, 'password': this.password};

    let loader = this.loadingCtrl.create({
      content: "Logging in user..."
    });
    loader.present();    

    this.auth.login('basic', details).then((data) => {
      console.log('Finished login');
      this.initProfile();

      loader.dismiss();

      console.log(data);
      console.log(this.user);
    }, (err) => {
      loader.dismiss();
      alert('Login Error');
    } );    
  }

  save() {
    let toast = this.toastCtrl.create({
      message: 'User profile was saved successfully',
      position: 'bottom',
      duration: 3000
    });
    toast.present();

    this.user.set('name', this.name);
    this.user.set('birthday', this.birthday);
    this.user.save();
  }

  logout() {
    this.auth.logout();
    this.email = '';
    this.password = '';
    this.name = '';
    this.birthday = '';
  }

}
