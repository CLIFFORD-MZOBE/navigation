import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

  
})
export class HomePage {
name:String="Hello World";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  navigator(){
    this.navCtrl.push("SecondPage",{siphiwe:this.name});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
