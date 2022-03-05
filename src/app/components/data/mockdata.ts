import { Flight } from "../flight/flight";

export class mockdataflight {
  public static mdflight: Flight[] = [
    {
      fullName: 'Kittima Moolamart',
      from: 'Thailand',
      to: 'Japan',
      type: 'One way',
      adults: 1,
      departure: new Date('2562-01-01'),
      children: 1,
      infants: 1,
      arrival: new Date('2562-01-02'),

    }
  ]
}
