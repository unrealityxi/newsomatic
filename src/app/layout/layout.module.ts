import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NavigationComponent, MainComponent],
  imports: [SharedModule, RouterModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule],
  exports: [MainComponent],
})
export class LayoutModule {}
