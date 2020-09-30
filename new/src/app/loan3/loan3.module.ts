import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Loan3PageRoutingModule } from './loan3-routing.module';

import { Loan3Page } from './loan3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Loan3PageRoutingModule
  ],
  declarations: [Loan3Page]
})
export class Loan3PageModule {}
