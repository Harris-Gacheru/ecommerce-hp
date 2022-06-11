import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FilterComponent } from './components/filter/filter.component';
import { PaginationComponent } from './components/pagination/pagination.component';


@NgModule({
  declarations: [
    FilterComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [FilterComponent, PaginationComponent]
})
export class SharedModule { }
