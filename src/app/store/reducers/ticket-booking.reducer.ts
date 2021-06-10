import {initialTicketBookingState, TicketBookingState} from '../states/ticket-booking.state';
import {TicketBookingAction, TicketBookingActionTypes} from '../actions/ticket-booking.actions';

export function TicketBookingReducer(state: TicketBookingState = initialTicketBookingState, action: TicketBookingAction)
  : TicketBookingState {
  switch (action.type) {
    case TicketBookingActionTypes.countTicketBooking:
      return {
        ticketCount: action.payload.countTicket
      };

    default:
      return state;
  }
}
