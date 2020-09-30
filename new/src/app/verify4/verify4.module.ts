import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Verify4PageRoutingModule } from './verify4-routing.module';

import { Verify4Page } from './verify4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Verify4PageRoutingModule
  ],
  declarations: [Verify4Page]
})
export class Verify4PageModule {}
