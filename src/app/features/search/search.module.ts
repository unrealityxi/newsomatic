import { NgModule } from '@angular/core';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './components/search/search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    SharedModule,
    SharedComponentsModule,
    FormsModule,
    SearchRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class SearchModule { }
