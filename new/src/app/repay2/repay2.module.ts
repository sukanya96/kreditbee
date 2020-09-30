import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Repay2PageRoutingModule } from './repay2-routing.module';

import { Repay2Page } from './repay2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Repay2PageRoutingModule
  ],
  declarations: [Repay2Page]
})
export class Repay2PageModule {}
