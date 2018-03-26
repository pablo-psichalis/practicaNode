class APIError extends Error {
  constructor(msg, status) {
    super(msg);
    this.message = msg;
    this.status = status;
  }
}

module.exports = APIError;
