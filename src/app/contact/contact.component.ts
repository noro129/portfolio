import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact : string = "";
  showState : boolean = false;

  GithubClicked(){
    if(this.showState){
      this.showState=false;
      setTimeout(() => {
        this.showState=true;
      }, 1);
    }else{
      this.showState=true;
    }
    this.contact="noro129";
  }
  EmailClicked(){
    if(this.showState){
      this.showState=false;
      setTimeout(() => {
        this.showState=true;
      }, 1);
    }else{
      this.showState=true;
    }
    this.contact="errazi111@gmail.com";
  }
  PhoneClicked(){
    if(this.showState){
      this.showState=false;
      setTimeout(() => {
        this.showState=true;
      }, 1);
    }else{
      this.showState=true;
    }
    this.contact="+212694105029";
  }
  LinkedinClicked(){
    if(this.showState){
      this.showState=false;
      setTimeout(() => {
        this.showState=true;
      }, 1);
    }else{
      this.showState=true;
    }
    this.contact="oussama errazi";
  }
}
