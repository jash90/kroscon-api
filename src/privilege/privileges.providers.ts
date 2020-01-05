import { Privilege } from './privilege.entity';

export const privilegesProviders = [{ provide: 'PrivilegesRepository', useValue: Privilege }];
