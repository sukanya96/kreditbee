import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepaymentPageRoutingModule } from './repayment-routing.module';

import { RepaymentPage } from './repayment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepaymentPageRoutingModule
  ],
  declarations: [RepaymentPage]
})
export class RepaymentPageModule {}
