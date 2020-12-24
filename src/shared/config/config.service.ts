import { Injectable } from "@nestjs/common";
import { ConnectionOptions } from "typeorm/connection/ConnectionOptions";
import { JwtConfig } from "./interfaces/jwt-config.interface";
import config from "../../../config";

@Injectable()
export class ConfigService {
    get typeOrmConfig(): ConnectionOptions {
        return config.database;
    }

    get jwtConfig(): JwtConfig {
        return {
            privateKey: config.jwtPrivateKey,
        };
    }
}
