import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Repay7PageRoutingModule } from './repay7-routing.module';

import { Repay7Page } from './repay7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Repay7PageRoutingModule
  ],
  declarations: [Repay7Page]
})
export class Repay7PageModule {}
