
import { Component, Input } from '@angular/core';
import { InvestmentService } from '../investment.service';


@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  constructor(private investmentService: InvestmentService) { }

  get results() {
    return this.investmentService.resultData;
  }

  // @Input() results?: <InvestmentResults>
  // @Input() results?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];

  // results = input< { meme chose qu'au dessus mais avec signal
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[]>();
}
