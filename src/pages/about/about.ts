import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-about",
  templateUrl: "about.html"
})
export class AboutPage {
  time = {
    hour: "00",
    minute: "00",
    second: "00"
  };

  isStart: boolean = false;
  isPause: boolean = false;

  hInput: number = 0;
  mInput: number = 0;
  sInput: number = 0;

  constructor(public navCtrl: NavController) {
   
    setInterval(() => {
      if (this.isStart)
        this.getInput(this.time.hour, this.time.minute, this.time.second);
      else {
      }
    }, 1000);
  }

  getInput(hour: string, minute: string, second: string) {
    if (parseInt(hour) == 0 && parseInt(minute) == 0 && parseInt(second) == 0) {
      this.isStart = false;
    } else {
      this.isStart = true;
      this.isPause = false;

      this.hInput = parseInt(hour) * 3600000;
      this.mInput = parseInt(minute) * 60000;
      this.sInput = parseInt(second) * 1000;

      let time: number = this.hInput + this.mInput + this.sInput;

      time -= 1000;

      if(parseInt(this.time.hour) <= 9){
        this.time.hour = '0' + Math.floor((time / (1000 * 60 * 60)) % 24).toString().substring(0, 2);
      }else if(parseInt(this.time.hour) >= 10 ){
        this.time.hour = Math.floor((time / (1000 * 60 * 60)) % 24).toString().substring(0, 2);
      }

      if(parseInt(this.time.minute) <= 9){
        this.time.minute = '0' + Math.floor((time / (1000 * 60)) % 60).toString().substring(0,2);
      }else if(parseInt(this.time.minute) >= 10 ){
        this.time.minute = Math.floor((time / (1000 * 60)) % 60).toString().substring(0,2);
      }

      if(parseInt(this.time.second) <= 9){
        this.time.second = '0' + Math.floor((time / 1000) % 60).toString().substring(0, 2);
      }else if (parseInt(this.time.second) >= 10){
        this.time.second = Math.floor((time / 1000) % 60).toString().substring(0, 2);
      }

      if(time = 0){
        this.cancel();
      }
    }
  }

  resume(){
    this.getInput(this.time.hour, this.time.minute, this.time.second);
  }

  cancel() {
    this.isStart = false;

    this.time = {
      hour: "00",
      minute: "00",
      second: "00"
    };
  }

  pause() {
    this.isPause = true;
    this.isStart = false;
  }
}
