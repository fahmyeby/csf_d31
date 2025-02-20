import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: false,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  // input property set to 0 as default
  @Input() currentNumber: number = 0;

  // event emitter to notify parent of changes
  @Output() numberChange = new EventEmitter<number>();

  // offset options
  offsets: number[] = [1, 2, 3, 4, 5];

  // default offset set to 1
  selectedOffset: number = 1;

  // min and max numbers
  readonly MAX_NUMBER = 30;
  readonly MIN_NUMBER = 0;


  // handle prev button click
  // decrement current number by selected offset
  // circular navigation when reach min bound
  onPrevClick(): void {
    let newNumber = this.currentNumber - this.selectedOffset;

    // handle wrap around to max when going < 0
    if (newNumber < this.MIN_NUMBER) {
      // calculate wrap around value
      newNumber =
        this.MAX_NUMBER - (Math.abs(newNumber) % (this.MAX_NUMBER + 1));
    }
    // emit/push change to parent component
    this.numberChange.emit(newNumber);
  }

  // handle next button click
  // increment current number by selected offset
  // circular navigation when reach max bound
  onNextClick(): void {
    let newNumber = this.currentNumber + this.selectedOffset;
    // handle wrap around to max when going > 30
    if (newNumber > this.MAX_NUMBER) {
      // calculate wrap around value
      newNumber = newNumber % (this.MAX_NUMBER + 1);
    }
    this.numberChange.emit(newNumber);
  }

  // handle offset selection change
  onOffsetChange(): void {
    this.selectedOffset = Number(this.selectedOffset);  // ensure offset is converted to number

  }
}
