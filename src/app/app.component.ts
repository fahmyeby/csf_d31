import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day31_pmpractice';

  // to maintain current number state
  currentNumber: number = 0

  // handle number change events from navigation component
  // update current number state
  onNumberChange(newNumber: number): void {
    this.currentNumber = newNumber
  }
}
