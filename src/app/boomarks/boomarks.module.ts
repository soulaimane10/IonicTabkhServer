import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoomarksPageRoutingModule } from './boomarks-routing.module';

import { BoomarksPage } from './boomarks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoomarksPageRoutingModule
  ],
  declarations: [BoomarksPage]
})
export class BoomarksPageModule {}
