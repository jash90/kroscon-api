import { Reservation } from './reservation.entity';

export const reservationsProviders = [{ provide: 'ReservationsRepository', useValue: Reservation }];
