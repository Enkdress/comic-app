import { Component, AfterViewInit,Input } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-open-map',
  templateUrl: './open-map.component.html',
  styleUrls: ['./open-map.component.scss'],
})
export class OpenMapComponent implements AfterViewInit {

  private map!: L.Map;
  @Input() latitude!: number;
  @Input() longitude!: number;

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {

    this.map = L.map('map').setView([this.latitude, this.longitude], 13); // Madrid, España

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }
}


