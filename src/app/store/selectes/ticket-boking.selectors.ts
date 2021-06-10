import {AppState} from '../states';

export const selectTicketBooking = (state: AppState) => state.ticketBooking.ticketCount;
