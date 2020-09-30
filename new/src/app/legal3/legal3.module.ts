import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Legal3PageRoutingModule } from './legal3-routing.module';

import { Legal3Page } from './legal3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Legal3PageRoutingModule
  ],
  declarations: [Legal3Page]
})
export class Legal3PageModule {}
