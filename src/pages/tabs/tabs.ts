import {Component, ViewChild} from '@angular/core';

import { AboutPage } from '../about/about';
import { UsercenterPage } from '../usercenter/usercenter';
import { HomePage } from '../home/home';
import {Tabs} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabRef: Tabs;
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = UsercenterPage;

  constructor() {

  }
  ionViewDidEnter() {
    /*let maint = this.tabRef;
    maint.select(0);*/
  }
}
