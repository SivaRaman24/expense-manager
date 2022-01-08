import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportComponent } from './report/report.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [
    TransactionsComponent,
    ReportComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExpenseModule { }
