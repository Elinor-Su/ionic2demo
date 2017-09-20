import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the UsercenterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-usercenter',
  templateUrl: 'usercenter.html',
})
export class UsercenterPage {
  headface: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {

    if(localStorage.Logined == 'true') {
      this.headface = 'images/'+localStorage.username+'.jpg';
    }else{
      let modal = this.modalCtrl.create(ContactPage);
      modal.onDidDismiss(data => {
        this.headface =  'images/'+localStorage.username+'.jpg';
      });
      modal.present();

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsercenterPage');
  }
  logout() {
    localStorage.Logined = '';
    localStorage.username = '';
    let modal = this.modalCtrl.create(ContactPage);
    modal.onDidDismiss(data => {
      this.headface =  'images/'+localStorage.username+'.jpg';
    });
    modal.present();
  }

}
