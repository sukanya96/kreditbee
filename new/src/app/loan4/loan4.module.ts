import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Loan4PageRoutingModule } from './loan4-routing.module';

import { Loan4Page } from './loan4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Loan4PageRoutingModule
  ],
  declarations: [Loan4Page]
})
export class Loan4PageModule {}
