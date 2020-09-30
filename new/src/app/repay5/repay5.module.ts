import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Repay5PageRoutingModule } from './repay5-routing.module';

import { Repay5Page } from './repay5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Repay5PageRoutingModule
  ],
  declarations: [Repay5Page]
})
export class Repay5PageModule {}
