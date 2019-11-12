"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
function setupSwagger(app) {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('MyDoctor API')
        .setLicense('MIT License', 'https://opensource.org/licenses/MIT')
        .setContactEmail('makrzywd@metal.agh.edu.pl')
        .setDescription('API Documentation')
        .setVersion('1.1')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('documentation', app, document);
}
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=swagger.js.map