import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisbursalPageRoutingModule } from './disbursal-routing.module';

import { DisbursalPage } from './disbursal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisbursalPageRoutingModule
  ],
  declarations: [DisbursalPage]
})
export class DisbursalPageModule {}
