const Hapi = require('@hapi/hapi');

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
  handler: (request, h) => {
    return 'Hello, Hapi.js!'  
  },
});