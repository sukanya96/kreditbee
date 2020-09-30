import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PincodePageRoutingModule } from './pincode-routing.module';

import { PincodePage } from './pincode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PincodePageRoutingModule
  ],
  declarations: [PincodePage]
})
export class PincodePageModule {}
