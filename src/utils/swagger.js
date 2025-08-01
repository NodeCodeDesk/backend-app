const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  // ✅ This key must be exactly `definition`
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Backend Foundation API',
      version: '1.0.0',
      description: 'API documentation for backend foundation project'
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Local server'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [{ bearerAuth: [] }]
  },
  // ✅ This should point to route files with JSDoc comments
  apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
