import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightserviceService } from '../service/flightservice.service';
import { Flight } from './flight';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  flight!:Flight[]
  flightForm!: FormGroup
  minDate!: Date

  constructor(
    private fb:FormBuilder,
    private fservice: FlightserviceService
  ) { }

  ngOnInit(): void {
    this.flightForm = this.fb.group({
      fullName: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      type: ['', Validators.required],
      adults: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      departure: ['', Validators.required],
      children: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      infants: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      arrival: ['', Validators.required],
    })
    this.minDate = new Date()
    this.getFlight()

  }

  getFlight():void {
    this.flight = this.fservice.getFlight()
  }

  onSubmit(f: Flight): void {
    const departureYear = f.departure.getFullYear() + 543;
    const departureMonth = f.departure.getMonth();
    const departureDay = f.departure.getDate();
    const arrivalYear = f.arrival.getFullYear() + 543;
    const arrivalMonth = f.arrival.getMonth();
    const arrivalDay = f.arrival.getDate();
    f.departure = new Date(
      departureMonth + 1 + '/' + departureDay + '/' + departureYear
    );
    f.arrival = new Date(
      arrivalMonth + 1 + '/' + arrivalDay + '/' + arrivalYear
    );
    this.fservice.addflights(f)
    this.flightForm.reset()
  }

}
