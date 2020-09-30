import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Loan6PageRoutingModule } from './loan6-routing.module';

import { Loan6Page } from './loan6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Loan6PageRoutingModule
  ],
  declarations: [Loan6Page]
})
export class Loan6PageModule {}
