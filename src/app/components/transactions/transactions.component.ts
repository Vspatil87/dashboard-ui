import { Component } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  transactionsData: any;

  constructor(private service: ApiService) { }

  ngOnInit() {
    this.getTransactionData();
  }

  getTransactionData() {
    this.service.getTransactions().subscribe(result => {
      if (result) {
        this.transactionsData = result;
      }
    })
  }
}
