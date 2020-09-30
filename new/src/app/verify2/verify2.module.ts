import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Verify2PageRoutingModule } from './verify2-routing.module';

import { Verify2Page } from './verify2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Verify2PageRoutingModule
  ],
  declarations: [Verify2Page]
})
export class Verify2PageModule {}
