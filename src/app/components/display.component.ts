import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display',
  standalone: false,
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  // input property to receive current number from parent component
  // default value set to 0
  @Input()
  currentNumber: number = 0;
}
