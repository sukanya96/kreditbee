import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Repay8PageRoutingModule } from './repay8-routing.module';

import { Repay8Page } from './repay8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Repay8PageRoutingModule
  ],
  declarations: [Repay8Page]
})
export class Repay8PageModule {}
