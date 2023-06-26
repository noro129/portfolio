import { Component } from '@angular/core';

interface Project {
  name : string,
  description : string,
  tools : string,
  link : string
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {

  numbers : number[];

  constructor(){
    this.numbers= Array(300).fill(0).map((x,i)=>i);
  }

  Rand() : number {
    return Math.floor(Math.random()*3)+1;
  }

  Random() : number {
    return Math.floor(Math.random()*100)+1;
  }

  RandomNeg() : number {
    return (-1)*Math.floor(Math.random()*500)-1;
  }

  projects : Project[] = [
      {
          "name":"NuMa Game",
          "description":"aaaaaaaaa aaaaaaaaaaaa a a aa  a aaaaa a aaaa aaaa ",
          "tools":"Android Studio and Java",
          "link":"#"
      },
      {
          "name":"Decentralized Voting Application",
          "description":"aaaaaaaaa aaaaaaaaaaaa a a aa  a aaaaa a aaaa aaaa ",
          "tools":"Solidity and Reactjs",
          "link":"#"
      },
      {
          "name":"Design and implementation of a management application for a research establishment",
          "description":"aaaaaaaaa aaaaaaaaaaaa a a aa  a aaaaa a aaaa aaaa ",
          "tools":"Merise, Oracle SQL and Oracle Apex",
          "link":"#"
      },
      {
          "name":"Mobile application for managing ENSIAS club events",
          "description":"aaaaaaaaa aaaaaaaaaaaa a a aa  a aaaaa a aaaa aaaa ",
          "tools":"Android Studio, Firebase and Java",
          "link":"#"
      }
  ];
}