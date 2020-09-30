import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dis4PageRoutingModule } from './dis4-routing.module';

import { Dis4Page } from './dis4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dis4PageRoutingModule
  ],
  declarations: [Dis4Page]
})
export class Dis4PageModule {}
