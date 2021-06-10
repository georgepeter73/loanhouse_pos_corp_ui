import {Action} from '@ngrx/store';
import {TicketSeat} from '../../models/ticket-seat';

export enum TicketBookingActionTypes {
  countTicketBooking = '[TicketBooking] Count TicketBookings'
}

export class TicketBookingAction implements Action {
  type: string;
  payload: {
    countTicket: number,
    tickets: TicketSeat[],
  };
}

export class CountTicketBooking implements Action {
  readonly type = TicketBookingActionTypes.countTicketBooking;

  constructor(readonly payload: {countTicket: number}) {

  }
}

export type TicketBookingActions = CountTicketBooking;
