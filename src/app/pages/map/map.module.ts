import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapPageRoutingModule } from './map-routing.module';

import { MapPage } from './map.page';
import { OpenMapComponent } from 'src/app/components/open-map/open-map.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule
  ],
  declarations: [MapPage, OpenMapComponent]
})
export class MapPageModule {
}
