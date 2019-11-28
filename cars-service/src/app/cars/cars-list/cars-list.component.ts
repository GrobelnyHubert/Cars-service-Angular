import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Car} from '../models/car';
import {TotalCostComponent} from '../total-cost/total-cost.component';
import {CarsService} from '../cars.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit {
  // @ts-ignore
  @ViewChild('totalCostRef') totalCostRef: TotalCostComponent;
  totalCost: number;
  grossCost: number;
  cars: Car[];
  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.loadCars();
    this.CountTotalCost();
  }
  loadCars(): void {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
    });
  }
  showGross(): void {
    this.totalCostRef.showGross();
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