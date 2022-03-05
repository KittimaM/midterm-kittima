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
      adults: ['', [Validators.required]],
      departure: ['', Validators.required],
      children: ['', [Validators.required]],
      infants: ['', [Validators.required]],
      arrival: ['', Validators.required],
    })
    this.minDate = new Date()
    this.getFlight()

  }

  getFlight():void {
    this.flight = this.fservice.getFlight()
  }

  onSubmit(f: Flight): void {
    this.fservice.addflights(f)
    this.flightForm.reset()
  }

}
