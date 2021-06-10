import {TicketBookingState} from './ticket-booking.state';
import {TodoState} from './todo.state';
import {ThemeState} from './theme.state';

export interface AppState {
  ticketBooking: TicketBookingState;
  todo: TodoState;
  theme: ThemeState;
}
