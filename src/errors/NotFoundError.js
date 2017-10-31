/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 9/6/16.
 */

class NotFoundError extends Error {
  constructor(error = {}) {
    super();
    this.statusCode = 404;
    this.message = error.message || '404 - Not Found';
  }
}

export default NotFoundError;
