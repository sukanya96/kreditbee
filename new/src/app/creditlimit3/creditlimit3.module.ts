import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Creditlimit3PageRoutingModule } from './creditlimit3-routing.module';

import { Creditlimit3Page } from './creditlimit3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Creditlimit3PageRoutingModule
  ],
  declarations: [Creditlimit3Page]
})
export class Creditlimit3PageModule {}
