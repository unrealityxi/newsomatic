import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [NavigationComponent, MainComponent],
  imports: [
    SharedModule,
    RouterModule,
    MatToolbarModule
  ],
  exports: [
    MainComponent
  ]
})
export class LayoutModule { }
