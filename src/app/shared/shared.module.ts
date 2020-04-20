import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule
  ],
  declarations: [],
  exports: [CommonModule, FlexLayoutModule, MatIconModule],
})
export class SharedModule {}
