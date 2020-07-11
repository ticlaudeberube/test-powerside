import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TickerService {
  timeout =  15000;
  messages = [
      'Grande Ventes D\'entrepôt',
      'Ce Samedi',
      'Ne ratez pas votre chance'
  ];

  private readonly tickerMessage = new BehaviorSubject(this.messages[0]);
  tickerMessage$ = this.tickerMessage.asObservable();


  constructor() {
      this.init();
  }

  init(): void {
    let index = 0;
    setInterval(() => {
      index = (index === this.messages.length - 1) ? 0 : ++index;
      this.tickerMessage.next(this.messages[index]);
    }, this.timeout);
  }
}
