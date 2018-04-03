import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TasksPage} from "../tasks/tasks";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    myDate: String = new Date().toDateString()
    globalArray = new Array();

  constructor(public navCtrl: NavController) {
      for(let i=0; i < 5; i++){ // n is array.length
          this.globalArray.push({ a1 : "3"});
      }

  }

   addTask():void{
       this.navCtrl.push(TasksPage);
    }


}
