import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Creditlimit2PageRoutingModule } from './creditlimit2-routing.module';

import { Creditlimit2Page } from './creditlimit2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Creditlimit2PageRoutingModule
  ],
  declarations: [Creditlimit2Page]
})
export class Creditlimit2PageModule {}
