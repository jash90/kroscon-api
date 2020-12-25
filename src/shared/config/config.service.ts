import { Injectable } from "@nestjs/common";
import { JwtConfig } from "./interfaces/jwt-config.interface";
import config from "../../../config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConnectionOptions } from "typeorm/connection/ConnectionOptions";

@Injectable()
export class ConfigService {
  get typeOrmConfig(): ConnectionOptions | TypeOrmModuleOptions {
    return config;
  }

  get connectionConfig(): ConnectionOptions {
    return config;
  }

  get jwtConfig(): JwtConfig {
    return {
      privateKey: config.jwtPrivateKey
    };
  }
}
