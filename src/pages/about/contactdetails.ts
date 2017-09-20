import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';


@Component({
  selector: 'page-contactdetails',
  templateUrl: 'contactdetails.html'
})
export class ContactdetailsPage {
  contacts: {
    'contactId': number;
    'contactname': string;
    'contacttext': string;
  };
  item: NavParams;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ViewCtrl: ViewController) {

    this.item = this.navParams.data.item;
    console.log(this.item);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UsercenterPage');
  }
  dismiss() {

    this.ViewCtrl.dismiss();
  }

}
