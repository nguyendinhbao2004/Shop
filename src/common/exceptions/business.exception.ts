// src/common/exceptions/business.exception.ts
import { HttpException, HttpStatus } from '@nestjs/common';

export class BusinessException extends HttpException {
  constructor(
    message: string,
    errorCode = 'BUSINESS_ERROR',
    status: HttpStatus = HttpStatus.BAD_REQUEST,
  ) {
    super(
      {
        success: false,
        message,
        errorCode,
      },
      status,
    );
  }
}
