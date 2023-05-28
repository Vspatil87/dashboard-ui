import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FinanceChartComponent } from './components/finance-chart/finance-chart.component';
import { ExpenseChartComponent } from './components/expense-chart/expense-chart.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { HttpClientModule } from '@angular/common/http';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FinanceChartComponent,
    ExpenseChartComponent,
    CardDetailsComponent,
    TransactionsComponent,
    TransferComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
