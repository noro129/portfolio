import { Component } from '@angular/core';
import { Education } from './education';
import { Experience } from './experience';

@Component({
  selector: 'app-e',
  templateUrl: './e.component.html',
  styleUrls: ['./e.component.scss']
})

export class EComponent {

  education : Education[] =[ 
    {
      field : "Mathematics and Physics",
      school : "Preparatory Classes for Engineering Schools Reda Slaoui (CPGE)",
      dateLocation : "Sep 2019 – Jun 2021 | Agadir, Morocco"
    },
    {
      field : "Software engineering student",
      school : "National School of Computer Science and Systems Analysis (ENSIAS)",
      dateLocation : "Sep 2021 – present | Rabat, Morocco"
    }
  ];

  experience : Experience[] = [
    {
      subject : "Artificial intelligence developer intern",
      date : "Aug 2022 – Oct 2022",
      title : "Spotify skip action prediction using user sequential data and acoustic characteristics.",
      technologies : "Google Colaboratory, Python(pandas, numpy, matplotlib, seaborn, sklearn, tensorflow, xgboost, Django), Git, GitHub and Heroku."
    }
  ]

}
