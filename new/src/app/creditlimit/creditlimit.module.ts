import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditlimitPageRoutingModule } from './creditlimit-routing.module';

import { CreditlimitPage } from './creditlimit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditlimitPageRoutingModule
  ],
  declarations: [CreditlimitPage]
})
export class CreditlimitPageModule {}
