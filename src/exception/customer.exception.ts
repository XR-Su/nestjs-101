import { CommonException } from './common.exception';
import { HttpStatus } from '@nestjs/common';

export class CustomerException extends CommonException {
  constructor() {
    super('CustomerId is not valid', HttpStatus.BAD_REQUEST);
  }
}
