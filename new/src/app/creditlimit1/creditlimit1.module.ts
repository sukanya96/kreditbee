import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Creditlimit1PageRoutingModule } from './creditlimit1-routing.module';

import { Creditlimit1Page } from './creditlimit1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Creditlimit1PageRoutingModule
  ],
  declarations: [Creditlimit1Page]
})
export class Creditlimit1PageModule {}
