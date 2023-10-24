import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { ComicComponent } from '../../components/comic/comic.component';
import { HomeSectionComponent } from 'src/app/components/home-section/home-section.component';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, ComicComponent, HomeSectionComponent, TabsComponent],
})
export class HomePageModule {}
