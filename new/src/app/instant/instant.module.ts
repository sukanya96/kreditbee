import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstantPageRoutingModule } from './instant-routing.module';

import { InstantPage } from './instant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstantPageRoutingModule
  ],
  declarations: [InstantPage]
})
export class InstantPageModule {}
