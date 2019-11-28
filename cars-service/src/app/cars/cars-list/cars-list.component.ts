import {Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import {Car} from '../models/car';
import {CarsService} from '../cars.service';
import {TotalCostComponent} from '../total-cost/total-cost.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit {
  @ViewChild('totalCostRef', {static: false}) totalCostRef: TotalCostComponent;
  totalCost: number;
  grossCost: number;
  cars: Car[];
  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.loadCars();
  }
  showGross(): void {
    this.totalCostRef.showGross();
  }
  loadCars(): void {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.CountTotalCost();
    });
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
