import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Repay4PageRoutingModule } from './repay4-routing.module';

import { Repay4Page } from './repay4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Repay4PageRoutingModule
  ],
  declarations: [Repay4Page]
})
export class Repay4PageModule {}
