import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from './../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''

  constructor(private route:ActivatedRoute,
  private service: WelcomeDataService) { }

  ngOnInit() {
    
    this.name = this.route.snapshot.params['name']
    //console.log(this.route.snapshot.params['name'])
  }
  
  getWelcomeMessage(){
    this.service.executeHelloWorldBeanService()
    console.log("getWelcomeMessage")
  }

}