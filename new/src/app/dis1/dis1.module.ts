import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dis1PageRoutingModule } from './dis1-routing.module';

import { Dis1Page } from './dis1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dis1PageRoutingModule
  ],
  declarations: [Dis1Page]
})
export class Dis1PageModule {}
