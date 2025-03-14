import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectReturn = '5';
  enteredDuration = '10';

  constructor(private investmentService: InvestmentService) { }
  // enteredInitialInvestment = signal ('0');avec signal property
  // enteredAnnualInvestment = signal ('0');
  // enteredExpectReturn = signal ('5');
  // enteredDuration = signal ('10');
  // @Output() calculate = new EventEmitter<ModelsDto>()
  // calculate = output<InvestmentResults>()avec output

  onSubmit() {

    this.investmentService.onCalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectReturn,
      annualInvestment: +this.enteredAnnualInvestment
    })
    // this.calculate.emit({ avec Output()
    // initialInvestment: +this.enteredInitialInvestment,
    // duration: +this.enteredDuration,
    // expectedReturn: +this.enteredExpectReturn,
    // annualInvestment: +this.enteredAnnualInvestment
    //})
    this.enteredInitialInvestment = '0'
    this.enteredAnnualInvestment = '0'
    this.enteredExpectReturn = '5'
    this.enteredDuration = '10'
    // this.enteredInitialInvestment.set('0') avec signal pour re init
    // this.enteredAnnualInvestment.set('0')
    // this.enteredExpectReturn.set('5')
    // this.enteredDuration.set('10')

  }
  // onSubmit() {
  //   this.calculate.emit({
  //     initialInvestment: +this.enteredInitialInvestment(),avec signal
  //     duration: +this.enteredDuration(),
  //     expectedReturn: +this.enteredExpectReturn(),
  //     annualInvestment: +this.enteredAnnualInvestment()
  //   })
  // }


}
