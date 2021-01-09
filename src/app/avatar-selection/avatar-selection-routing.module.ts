import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvatarSelectionPage } from './avatar-selection.page';

const routes: Routes = [
  {
    path: '',
    component: AvatarSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvatarSelectionPageRoutingModule {}
