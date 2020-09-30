import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Loan5PageRoutingModule } from './loan5-routing.module';

import { Loan5Page } from './loan5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Loan5PageRoutingModule
  ],
  declarations: [Loan5Page]
})
export class Loan5PageModule {}
