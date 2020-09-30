import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dis2PageRoutingModule } from './dis2-routing.module';

import { Dis2Page } from './dis2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dis2PageRoutingModule
  ],
  declarations: [Dis2Page]
})
export class Dis2PageModule {}
