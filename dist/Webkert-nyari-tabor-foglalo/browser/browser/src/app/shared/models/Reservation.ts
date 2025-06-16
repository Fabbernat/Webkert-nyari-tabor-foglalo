import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation',
  imports: [],
  template: './reservation.component.html',
  styles: '{}'
})
export class ReservationComponent {

}

export interface Reservation{
  id: string;
  userId: string;
  campId: string;
  childIds: string[];
  bookingDate: Date;
  status: 'pending' | 'confirmed' | 'cancelled';
  paymentStatus: 'unpaid' | 'paid';
  totalPrice: number;
}