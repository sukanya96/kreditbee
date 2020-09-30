import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Legal2PageRoutingModule } from './legal2-routing.module';

import { Legal2Page } from './legal2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Legal2PageRoutingModule
  ],
  declarations: [Legal2Page]
})
export class Legal2PageModule {}
