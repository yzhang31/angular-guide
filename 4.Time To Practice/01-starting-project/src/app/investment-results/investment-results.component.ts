import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { type InvestmentResult } from './investment-results.model';
import { InvestmentResultService } from './investment-results.service';

@Component({
  selector: 'app-investment-results',

  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  get investmentResult() { return this.investmentService.resultData.asReadonly()};

  constructor(private investmentService: InvestmentResultService) { }

}
