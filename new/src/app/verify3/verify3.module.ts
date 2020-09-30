import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Verify3PageRoutingModule } from './verify3-routing.module';

import { Verify3Page } from './verify3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Verify3PageRoutingModule
  ],
  declarations: [Verify3Page]
})
export class Verify3PageModule {}
