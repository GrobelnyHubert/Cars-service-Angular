import { Component, OnInit } from '@angular/core';
import {CarsService} from '../cars.service';
import {ActivatedRoute} from '@angular/router';
import {Car} from '../models/car';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cs-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.less']
})
export class CarDetailsComponent implements OnInit {
 car: Car;
  constructor(private carsService: CarsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadCar();
  }
  loadCar() {
    this.car = this.route.snapshot.data.car;
  }
}
