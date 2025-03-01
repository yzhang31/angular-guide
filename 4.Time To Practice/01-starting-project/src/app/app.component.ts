import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { type InvestmentResult } from './investment-results/investment-results.model';


@Component({
  selector: 'app-root',

  templateUrl: './app.component.html'
})
export class AppComponent {

  // investmentResult! : InvestmentResult[];

  investmentResult = signal<InvestmentResult[] | undefined>(undefined);

  onCompute(results: InvestmentResult[]) {
    this.investmentResult.set(results);
  }
}
