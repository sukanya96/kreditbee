import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WritemsgPageRoutingModule } from './writemsg-routing.module';

import { WritemsgPage } from './writemsg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WritemsgPageRoutingModule
  ],
  declarations: [WritemsgPage]
})
export class WritemsgPageModule {}
