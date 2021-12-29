export const SERVER_URL =
  process.env.NODE_ENV !== 'development' ? 'http://localhost:8080' : 'https://yugioh-reborn-server.herokuapp.com';

export enum SERVER_ERRORS {
  SERVER_NOT_STARTED = 'SERVER_NOT_STARTED',
}
