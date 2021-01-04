import { CustomError } from './custom-error'

export class DatabaseConnectionError extends CustomError {
  statusCode = 500
  reason = 'Error connection to database'
  
  constructor() {
    super('Error connection to database')
  }

  serializeErrors() {
    return [
      { message: this.reason }
    ]
  }
}