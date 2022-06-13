import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FilterComponent } from './components/filter/filter.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
  declarations: [
    FilterComponent,
    PaginationComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [FilterComponent, PaginationComponent, SpinnerComponent]
})
export class SharedModule { }
