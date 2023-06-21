import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  navs=['HOME','E & E','ABOUT','PROJECTS','CONTACT','CV'];

  p=1;
  namePortfolio="my portfolio";

  SwitchNamePortfolio() {
    if(this.p===1){
      this.p=2;
      this.namePortfolio="errazi oussama";
    }else{
      this.p=1;
      this.namePortfolio="my portfolio";
    }
  }
}
