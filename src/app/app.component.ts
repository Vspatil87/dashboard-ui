import { Component } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cardsData: any;
  balance: string = '';
  constructor(private service: ApiService) { }

  ngOnInit() {
    this.getCardsData();
  }

  getCardsData() {
    this.service.getCardsData().subscribe(result => {
      if (result) {
        this.cardsData = Object.keys(result).map((key: string) => {
          return {
            title: key,
            value: result[key]
          }
        });
        if (this.cardsData.length > 0) {
          this.balance = this.cardsData[0].value;
        }
      }
    });
  }


}
