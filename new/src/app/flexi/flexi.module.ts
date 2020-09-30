import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlexiPageRoutingModule } from './flexi-routing.module';

import { FlexiPage } from './flexi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexiPageRoutingModule
  ],
  declarations: [FlexiPage]
})
export class FlexiPageModule {}
