
const webService = {
  url: 'https://qa.cartacorp.net/auth',
  realm: 'carta',
  clientId: 'portal'
};

const options = {
  config: webService,
  enableBearerInterceptor: true
};

export const environment = {
  production: true,
  options,
  apiUrl: 'http://localhost:3800/',
};