import {TicketSeat} from '../../models/ticket-seat';

export interface TicketBookingState {
  ticketCount: number;
  ticketData?: TicketSeat[];
}

export const initialTicketBookingState: TicketBookingState = {
  ticketCount: 0,
  ticketData: []
};
