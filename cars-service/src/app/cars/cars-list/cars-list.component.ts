import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Car} from '../models/car';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit {
  totalCost: number;
  grossCost: number;
  cars: Car[];
  constructor() { }

  ngOnInit() {
    this.CountTotalCost();
  }
  CountTotalCost(): void {
    this.totalCost = this.cars
      .map((car) => car.cost)
      .reduce((prev, next) => prev + next);
  }
  onShownGross(grossCost: number): void {
    this.grossCost = grossCost;
  }
}
