import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController) {
    setInterval(() => this.getTime(), 60000);
  }

  getTime() {
    let date = new Date(Date.now());
    let hour = date.getHours();
    let minute = date.getMinutes();

    if (hour > 12) {
      if (minute < 10) {
        return (hour - 12).toString() + ":" + "0" + minute.toString() + " PM";
      } else {
        return (hour - 12).toString() + ":" + minute.toString() + " PM";
      }
    } else {
      if (minute < 10) {
        return hour.toString() + ":" + "0" + minute.toString() + " AM";
      } else {
        return hour.toString() + ":" + minute.toString() + " AM";
      }
    }
  }
}
