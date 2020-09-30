import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Repay6PageRoutingModule } from './repay6-routing.module';

import { Repay6Page } from './repay6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Repay6PageRoutingModule
  ],
  declarations: [Repay6Page]
})
export class Repay6PageModule {}
