import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvatarSelectionPageRoutingModule } from './avatar-selection-routing.module';

import { AvatarSelectionPage } from './avatar-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarSelectionPageRoutingModule
  ],
  declarations: [AvatarSelectionPage]
})
export class AvatarSelectionPageModule {}
