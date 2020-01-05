import { Mechanic } from './mechanic.entity';

export const mechanicsProviders = [{ provide: 'MechanicsRepository', useValue: Mechanic }];
