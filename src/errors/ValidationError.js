/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 9/6/16.
 */

class ValidationError extends Error {
  constructor(error) {
    super();
    this.statusCode = error.statusCode || 400;
    this.message = error.message || 'Internal Server Error';
  }
}