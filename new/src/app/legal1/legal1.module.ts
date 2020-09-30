import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Legal1PageRoutingModule } from './legal1-routing.module';

import { Legal1Page } from './legal1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Legal1PageRoutingModule
  ],
  declarations: [Legal1Page]
})
export class Legal1PageModule {}
