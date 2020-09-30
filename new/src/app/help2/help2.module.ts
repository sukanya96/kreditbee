import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Help2PageRoutingModule } from './help2-routing.module';

import { Help2Page } from './help2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Help2PageRoutingModule
  ],
  declarations: [Help2Page]
})
export class Help2PageModule {}
