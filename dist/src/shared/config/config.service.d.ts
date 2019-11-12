import { SequelizeOrmConfig } from './interfaces/sequelize-orm-config.interface';
import { JwtConfig } from './interfaces/jwt-config.interface';
export declare class ConfigService {
    readonly sequelizeOrmConfig: SequelizeOrmConfig;
    readonly jwtConfig: JwtConfig;
}
