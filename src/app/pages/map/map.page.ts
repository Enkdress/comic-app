import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  latitude!: number;
  longitude!: number;
  constructor() {
    this.latitude = 2.57019//3.33316;
    this.longitude = -77.88266// -76.52418;
   }

  ngOnInit() {

  }

}
