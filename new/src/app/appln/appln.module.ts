import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplnPageRoutingModule } from './appln-routing.module';

import { ApplnPage } from './appln.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplnPageRoutingModule
  ],
  declarations: [ApplnPage]
})
export class ApplnPageModule {}
