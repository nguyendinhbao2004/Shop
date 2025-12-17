// src/common/response/base-response.ts
export class BaseResponse<T> {
  constructor(
    public success: boolean,
    public message: string,
    public data?: T,
    public errorCode?: string,
  ) {}

  static success<T>(data: T, message = 'Success') {
    return new BaseResponse(true, message, data);
  }

  static error(message: string, errorCode?: string) {
    return new BaseResponse(false, message, null, errorCode);
  }
}
