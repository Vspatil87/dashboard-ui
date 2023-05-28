import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  cardsDataUrl: string = 'https://1.api.fy23ey01.careers.ifelsecloud.com/';
  transactionUrl: string = 'https://2.api.fy23ey01.careers.ifelsecloud.com/';

  constructor(private http: HttpClient) { }

  getCardsData(): Observable<any> {
    return this.http.get(this.cardsDataUrl);
  }

  getTransactions(): Observable<any> {
    return this.http.get(this.transactionUrl);
  }
}
