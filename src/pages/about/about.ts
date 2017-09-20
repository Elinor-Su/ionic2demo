import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';

import {ContactdetailsPage} from "./contactdetails";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  contacts: {
    'contactId': number;
    'contactname': string;
    'contacttext': string;
  }[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.contacts=[
      {'contactId': 1, 'contactname': '麦兜1', 'contacttext': '麦兜响当当1'},
      {'contactId': 2, 'contactname': '麦兜2', 'contacttext': '麦兜响当当2'},
      {'contactId': 3, 'contactname': '麦兜3', 'contacttext': '麦兜响当当3'},
      {'contactId': 4, 'contactname': '麦兜4', 'contacttext': '麦兜响当当4'},
      {'contactId': 5, 'contactname': '麦兜5', 'contacttext': '麦兜响当当5'}
    ]
  }
  itemClick(event,contact){
    console.log(contact.contactId);
    // 点击，加载相应的页面
    // this.navCtrl.push();
    this.navCtrl.push(ContactdetailsPage, {item: contact});
  }
  removeContent(contact){
    //请求api进行删除
    for (var i = 0; i < this.contacts.length; i++) {
      if(this.contacts[i] == contact){
        this.contacts.splice(i,1);

      }
    }
    console.log("request api:" + contact.contactId+ 'removed');
  }

}
