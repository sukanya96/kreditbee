import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Repay9PageRoutingModule } from './repay9-routing.module';

import { Repay9Page } from './repay9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Repay9PageRoutingModule
  ],
  declarations: [Repay9Page]
})
export class Repay9PageModule {}
