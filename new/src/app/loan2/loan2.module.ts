import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Loan2PageRoutingModule } from './loan2-routing.module';

import { Loan2Page } from './loan2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Loan2PageRoutingModule
  ],
  declarations: [Loan2Page]
})
export class Loan2PageModule {}
