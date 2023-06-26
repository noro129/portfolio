import { Component } from '@angular/core';


interface SCL{
  key : string;
  value : string;
}

@Component({
  selector: 'app-scl',
  templateUrl: './scl.component.html',
  styleUrls: ['./scl.component.scss']
})



export class SclComponent {
  f = "Skills";
  s = "Languages";
  t = "Certificates";
  o = "";
  obj : SCL[] = [];
  first : SCL[] = [
    {
      key : 'Programming languages',
      value: 'Java, C and Python'
    },{
      key : 'DevOps',
      value: 'Git, Docker and Jenkins'
    },{
      key : 'Web Development',
      value: 'JavaScript, HTML, CSS, Spring boot, Angular and Django'
    },{
      key : 'Agile Methods',
      value: 'Scrum'
    },{
      key : 'Database Management Systems',
      value: 'Oracle, MySQL and SQL Server'
    },{
      key : 'Conception',
      value: 'UML, Merise'
    }
  ];
  second : SCL[] = [
    {
      key : 'Arabic',
      value : 'Native language'
    },{
      key : 'Frensh',
      value : 'Good'
    },{
      key : 'English',
      value : 'Good'
    }
  ];
  third : SCL[] = [
    {
      key : 'IBM',
      value : 'Artificial Intelligence Analyst from IBM'
    }
  ];

  afterState : boolean = false;
  beforeState : boolean = false;
  canGoRight : boolean = true;
  canGoLeft : boolean = true;

  after() : void{
    if(this.canGoRight){
      this.afterState=true;
      this.canGoRight=false;
      setTimeout(() => {
        this.afterState=false;
        this.obj=this.third;
        this.o=this.t;
        this.third=this.second;
        this.t=this.s;
        this.second=this.first;
        this.s=this.f;
        this.first=this.obj;
        this.f=this.o;
        this.canGoRight=true;
      }, 700);
    }
    
  }
  before() : void{
    if(this.canGoLeft){
      this.beforeState=true;
      this.canGoLeft=false;
      setTimeout(() => {
        this.beforeState=false;
        this.obj=this.first;
        this.o=this.f;
        this.first=this.second;
        this.f=this.s;
        this.second=this.third;
        this.s=this.t;
        this.third=this.obj;
        this.t=this.o;
        this.canGoLeft=true;
      }, 700);
    }
    
  }
}
