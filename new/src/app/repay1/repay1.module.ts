import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Repay1PageRoutingModule } from './repay1-routing.module';

import { Repay1Page } from './repay1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Repay1PageRoutingModule
  ],
  declarations: [Repay1Page]
})
export class Repay1PageModule {}
