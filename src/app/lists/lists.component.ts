import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  /*list = {
    id:1,
    description: 'Learn Angular'
  }*/

  lists =[
    {id:1,description: 'Angular'},
    {id:2,description: 'Java'},
    {id:3,description: 'Ptyhon'},
    {id:4,description: 'Web-Service'},
    {id:5,description: 'Spring-boot'},

  ]



  constructor() { }

  ngOnInit() {
  }

}

export class Todo {


  constructor(  public id: number,
  public description: string,
  public done: boolean,
  public targetDate: Date){
    
  }

}