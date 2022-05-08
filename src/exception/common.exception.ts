export class CommonException extends Error {
  private readonly error_message: string;

  constructor(message: string) {
    super(message);
    this.error_message = message;
  }

  getErrorMessage() {
    return this.error_message;
  }
}
