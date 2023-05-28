import { Component } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cardsData: any;
  constructor(private service: ApiService) { }

  ngOnInit() {
    this.getCardsData();
  }

  getCardsData() {
    this.service.getCardsData().subscribe(result => {
      if (result) {
        this.cardsData = result;
      }
    });
  }

}
