import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public images!:any;

  constructor() { }

  ngOnInit(): void {
    this.images = ["../../../../assets/images/farm.jpg","../../../../assets/images/garden.jpg" , "../../../../assets/images/iot-farm.jpg"];
  }

}



