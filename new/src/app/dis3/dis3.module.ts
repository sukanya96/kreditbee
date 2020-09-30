import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dis3PageRoutingModule } from './dis3-routing.module';

import { Dis3Page } from './dis3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dis3PageRoutingModule
  ],
  declarations: [Dis3Page]
})
export class Dis3PageModule {}
