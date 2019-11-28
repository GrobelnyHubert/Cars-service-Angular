import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cs-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.less']
})
export class TotalCostComponent {
@Input() totalCost: number;
@Output() shownGross: EventEmitter<number> = new EventEmitter<number>();
private Vat = 1.23;

  showGross(): void {
    this.shownGross.emit(this.totalCost * this.Vat);
  }
}
