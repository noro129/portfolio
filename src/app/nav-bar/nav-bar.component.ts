import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  navs=['HOME','E & E','ABOUT','PROJECTS','CONTACT','CV'];

  namePortfolio="portfolio";

  SwitchNamePortfolio() {
    if(this.namePortfolio==="portfolio"){
      this.namePortfolio="errazi oussama";
    }else{
      this.namePortfolio="portfolio";
    }
  }
}
