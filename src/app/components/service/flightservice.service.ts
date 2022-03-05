import { Injectable } from '@angular/core';
import { Flight } from '../flight/flight';
import { mockdataflight } from '../data/mockdata';

@Injectable({
  providedIn: 'root'
})
export class FlightserviceService {
  flights: Flight[] = []

  constructor() {
    this.flights = mockdataflight.mdflight
  }

  getFlight(): Flight[] {
    return this.flights;
  }

  addflights(f: any): void {
    this.flights.push({
      fullName: f.fullName,
      from: f.from,
      to: f.to,
      type: f.type,
      adults: f.adults,
      departure: f.departure,
      children: f.children,
      infants: f.infants,
      arrival: f.arrival,

    })

  }

}
