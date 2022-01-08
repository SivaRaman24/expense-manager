import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CategoryListComponent } from './category-list/category-list.component';



@NgModule({
  declarations: [
    ListComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CategoryModule { }
