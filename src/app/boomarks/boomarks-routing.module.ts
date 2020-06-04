import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoomarksPage } from './boomarks.page';

const routes: Routes = [
  {
    path: '',
    component: BoomarksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoomarksPageRoutingModule {}
