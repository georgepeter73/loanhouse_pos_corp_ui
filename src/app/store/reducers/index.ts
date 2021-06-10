import {MetaReducer, ActionReducerMap} from '@ngrx/store';
import {AppState} from '../states';
import {environment} from '../../../environments/environment';
import {TicketBookingReducer} from './ticket-booking.reducer';
import {TodoReducer} from './todo.reducer';
import {ThemeReducer} from './theme.reducer';

export const reducers: ActionReducerMap<AppState> = {
  ticketBooking: TicketBookingReducer,
  todo: TodoReducer,
  theme: ThemeReducer
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
