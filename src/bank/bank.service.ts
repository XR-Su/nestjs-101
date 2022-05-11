import { Injectable } from '@nestjs/common';

@Injectable()
export class BankService {
  findOne(): any {
    return {
      id: '1',
      name: 'bank',
    };
  }
}
