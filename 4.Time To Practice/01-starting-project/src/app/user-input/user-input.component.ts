import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultService } from '../investment-results/investment-results.service';
import { InvestmentResult } from '../investment-results/investment-results.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  constructor(private investmentResultService: InvestmentResultService) { }

  initialInvestment = signal('100');
  annualInvestment = signal('10');
  expectedReturn = signal('5');
  duration = signal('10');

  onSubmit() {
    let result = this.investmentResultService.calculateInvestmentResults(
      +this.initialInvestment(),
      +this.duration(),
      +this.expectedReturn(),
      +this.annualInvestment()

    )
    console.log(result);
    console.table(result);

    this.initialInvestment.set('100');
    this.annualInvestment.set('10');
    this.expectedReturn.set('5');
    this.duration.set('10');
  }
}
