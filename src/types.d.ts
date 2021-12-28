enum SERVER_ERRORS {
  SERVER_NOT_STARTED = 'SERVER_NOT_STARTED',
}

type ServerError = {
  error: {
    msg: string;
    type: SERVER_ERRORS;
  };
};
