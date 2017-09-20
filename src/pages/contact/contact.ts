import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {
  AlertController, LoadingController, ModalController, NavController,
  ToastController, ViewController
} from 'ionic-angular';

import {RegisterPage} from "./register";
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  username:any;
  password:any;

  constructor(public navCtrl: NavController,public loadingCtrl:LoadingController, public alertCtrl: AlertController, public modalCtrl: ModalController, public toastCtrl: ToastController, public viewCtrl: ViewController,public http: Http) {


  }
  showFill(){
    if(!this.password){
      /*console.log("234");
      let alertUsernameError = this.alertCtrl.create({
        title: 'Ionic demo',
        subTitle: '我还不知道你是谁呀',
        buttons: ['ok']
      });
      alertUsernameError.present();*/
      let toast = this.toastCtrl.create({
        message: '有点小问题哦，请检查一下',
        duration: 2000
      });
      toast.present();

    }else{
      // 创建loading窗口，模拟你登陆成功loading窗口消失
      let loader = this.loadingCtrl.create({
        content: "Please wait..."
      });
      loader.present();
      /*setTimeout(()=>{
        loader.dismiss();
      },5000);*/
      // 模拟登陆，输入密码为1，登陆成功，
      /*if(this.password == '1'){
        localStorage.username = this.username;
        localStorage.Logined = "true";
        setTimeout(()=>{
          loader.dismiss();// 登陆进度条隐藏
          this.viewCtrl.dismiss(this.username);
        },1000);
      }else{
        let toast = this.toastCtrl.create({
          message: "登陆失败",
          duration: 2000
        });
        toast.present();
      }*/
      // 请求Api
      this.http.get("http://api.gugujiankong.com/account/Login?email="+this.username+"&password="+this.password)
        .subscribe(data=>{
          localStorage.username = this.username;
          localStorage.Logined = "true";
          loader.dismiss();// 登陆进度条隐藏
          this.viewCtrl.dismiss(this.username);
        },(error)=>{
          let toast = this.toastCtrl.create({
            message: "登陆失败",
            duration: 2000
          });
          toast.present();
        });



    }

  }
// 打开注册窗口
  openRegisterPage() {
    let modal = this.modalCtrl.create(RegisterPage);
    modal.present();
  }
}
