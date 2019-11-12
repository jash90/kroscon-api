"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_development_1 = require("./config/config.development");
const config_production_1 = require("./config/config.production");
let config;
if (process.env.NODE_ENV === 'production') {
    config = config_production_1.config;
}
else {
    config = config_development_1.config;
}
exports.default = config;
//# sourceMappingURL=config.js.map