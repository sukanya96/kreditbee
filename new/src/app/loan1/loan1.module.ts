import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Loan1PageRoutingModule } from './loan1-routing.module';

import { Loan1Page } from './loan1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Loan1PageRoutingModule
  ],
  declarations: [Loan1Page]
})
export class Loan1PageModule {}
