import { Component } from '@angular/core';

interface Project {
  name : string,
  description : string,
  tools : string,
  link : string,
  image : string
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {

  projects : Project[] = [
      {
          "name":"NuMa Game",
          "description":"A simple android game for math lovers",
          "tools":"Android Studio and Java",
          "link":"https://github.com/noro129/NuMa-Game",
          "image":"/assets/numa.jpeg"
      },
      {
          "name":"Decentralized Voting Application",
          "description":"aaaaaaaaa aaaaaaaaaaaa a a aa  a aaaaa a aaaa aaaa ",
          "tools":"Solidity and Reactjs",
          "link":"#",
          "image":"/assets/numa.jpeg"
      },
      {
          "name":"Design and implementation of a management application for a research establishment",
          "description":"aaaaaaaaa aaaaaaaaaaaa a a aa  a aaaaa a aaaa aaaa ",
          "tools":"Merise, Oracle SQL and Oracle Apex",
          "link":"#",
          "image":"/assets/numa.jpeg"
      },
      {
          "name":"Mobile application for managing ENSIAS club events",
          "description":"Android app for ENSIAS clubs to create & manage their events",
          "tools":"Android Studio, Firebase and Java",
          "link":"#",
          "image":"/assets/numa.jpeg"
      }
  ];
}