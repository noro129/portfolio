import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {


  navs=['HOME','2E','PROJECTS','SCL','CONTACT','CV','A GAME'];
  show_nav = false;
  showDownloadOption = false;
  p=1;
  namePortfolio="my portfolio";

  constructor(private router : Router){}

  SwitchNamePortfolio() {
    if(this.p===1){
      this.p=2;
      this.namePortfolio="errazi oussama";
    }else{
      this.p=1;
      this.namePortfolio="my portfolio";
    }
  }

  showNav(){
    this.show_nav=!this.show_nav;
  }

  showDiv(item : string){
    if(item=="CV"){
      this.showDownloadOption=true;
    }else if(item=="A GAME"){
    }else{
    }
  }

  showDiv_hideNav(item : string){
    if(item=="CV"){
      this.showDownloadOption=true;
    }
    this.showNav();
    this.showDiv(item);
  }

  showDownload(clickedButton : string){
    if(clickedButton!="X"){
    }
    this.showDownloadOption=false;
  }
}
