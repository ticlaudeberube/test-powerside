import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TickerService } from '../ticker.service.service';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.component.html',
  styleUrls: ['./ticker.component.component.css']
})
export class TickerComponent implements OnInit {
  tickerMessage$: Observable<string>;
  constructor(private readonly tickerService: TickerService) {}

  ngOnInit(): void {
    this.tickerMessage$ = this.tickerService.tickerMessage$;
  }
}
