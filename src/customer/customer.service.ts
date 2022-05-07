import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  findOne(): any {
    return { id: '1', name: 'jack', meta: 'dec', isActive: false };
  }
}
