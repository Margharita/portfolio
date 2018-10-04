import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.less']
})
export class CalculatorComponent {
  displayValue: number = 0;
  memoryValue: number = 0;
  wasOperation: boolean = false;
  memoryPendingOperation: string;

  constructor() { }

  reset() {
    this.displayValue = 0;
  }

  operation(e) {
    var localMemValue = +this.displayValue;
    
    this.wasOperation = true;
    if (this.memoryPendingOperation == '+') {
      this.memoryValue = this.memoryValue + localMemValue;
    } else if (this.memoryPendingOperation == '-') {
      this.memoryValue -= localMemValue;
    } else if (this.memoryPendingOperation == '*') {
      this.memoryValue *= localMemValue;
    } else if (this.memoryPendingOperation == '/') {
      this.memoryValue /= localMemValue;
    } else {
      this.memoryValue = localMemValue;
    };
    this.displayValue = this.memoryValue;
    this.memoryPendingOperation = e.currentTarget.innerHTML;
  };

  enterNum(e) {
    let targetValue = e.target.innerHTML;
    if (targetValue == '.' && this.displayValue == 0) {
      this.displayValue += targetValue;
    } else {
      if (this.wasOperation === true) {
        this.displayValue = targetValue;
        this.wasOperation = false;
      } else {
        if (this.displayValue === 0) {
          this.displayValue = targetValue;
        } else {
          this.displayValue += targetValue;
        };
      };
    };

  };

}
