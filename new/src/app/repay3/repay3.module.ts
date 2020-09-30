import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Repay3PageRoutingModule } from './repay3-routing.module';

import { Repay3Page } from './repay3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Repay3PageRoutingModule
  ],
  declarations: [Repay3Page]
})
export class Repay3PageModule {}
