import {Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import {Car} from '../models/car';
import {CarsService} from '../cars.service';
import {TotalCostComponent} from '../total-cost/total-cost.component';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


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
  carForm: FormGroup;
  constructor(private carsService: CarsService,
              private  router: Router,
              private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.loadCars();
    this.carForm = this.buildCarForm();
  }
  buildCarForm() {
    return this.formBuilder.group({
      model: ['', Validators.required],
      type: '',
      plate: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
      deliveryDate: '',
      deadline: '',
      color: '',
      power: '',
      clientFirstName: '',
      clientSurname: '',
      cost: '',
      isFullyDamaged: '',
      year: ''
    });
  }
  showGross(): void {
    this.totalCostRef.showGross();
  }
  goToCarDetail(car: Car) {
    this.router.navigate(['/cars', car.id]);
  }
  loadCars(): void {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.CountTotalCost();
    });
  }
  addCar() {
    this.carsService.addCar(this.carForm.value).subscribe(() => {
      this.loadCars();
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
