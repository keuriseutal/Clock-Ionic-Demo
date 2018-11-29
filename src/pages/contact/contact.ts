import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-contact",
  templateUrl: "contact.html"
})
export class ContactPage {
  isStart: boolean = false;
  isPause: boolean = false;
  isMinuteReached: boolean = false;
  isHourReached: boolean = false;

  hr: string = "00";
  min: string = "00";
  sec: string = "00";

  constructor(public navCtrl: NavController) {
    setInterval(() => {
      if (this.isStart) this.start();
      else {
      }
    }, 1000);
  }

  start() {
    this.isStart = true;
    this.isPause = false;

    if (this.isStart) {
      //seconds
      if (parseInt(this.sec) <= 8) {
        this.sec = "0" + (parseInt(this.sec) + 1).toString();
      } else if (parseInt(this.sec) >= 9 && parseInt(this.sec) <= 58) {
        this.sec = (parseInt(this.sec) + 1).toString();
      } else if (parseInt(this.sec) == 59) {
        this.sec = "00";
        this.isMinuteReached = true;
      }

      //minutes
      if (parseInt(this.min) <= 8 && this.isMinuteReached) {
        this.min = "0" + (parseInt(this.min) + 1).toString();
        this.isMinuteReached = false;
      } else if (
        parseInt(this.min) >= 9 &&
        parseInt(this.min) <= 58 &&
        this.isMinuteReached
      ) {
        this.min = (parseInt(this.min) + 1).toString();
        this.isMinuteReached = false;
      } else if (parseInt(this.min) == 59 && this.isMinuteReached) {
        this.min = "00";
        this.isHourReached = true;
        this.isMinuteReached = false;
      }

      //hour
      if (parseInt(this.hr) <= 8 && this.isHourReached) {
        this.hr = "0" + (parseInt(this.hr) + 1).toString();
        this.isHourReached = false;
      } else if (
        parseInt(this.hr) >= 9 &&
        parseInt(this.hr) <= 11 &&
        this.isHourReached
      ) {
        this.hr = (parseInt(this.hr) + 1).toString();
        this.isHourReached = false;
      } else if (parseInt(this.hr) == 12) {
        this.cancel();
      }
    }
  }

  cancel() {
    this.isStart = false;

    this.hr = "00";
    this.min = "00";
    this.sec = "00";
  }

  pause() {
    this.isPause = true;
    this.isStart = false;
  }
}
