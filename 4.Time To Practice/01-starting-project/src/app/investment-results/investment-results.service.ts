import { Injectable, signal} from "@angular/core";
import { type InvestmentResult } from "./investment-results.model";
import { single } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class InvestmentResultService {

resultData  = signal<{
  year: Number,
  interest: Number,
  valueEndOfYear: Number,
  annualInvestment: Number,
  totalInterest: Number,
  totalAmountInvested: Number,
}[]| undefined> (undefined);

calculateInvestmentResults(
    initialInvestment: number, 
    duration: number,
    expectedReturn: number,
    annualInvestment: number,
    ) : InvestmentResult[] {
    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultData.set( annualData);
  
    return annualData;
  }

}