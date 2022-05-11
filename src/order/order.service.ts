import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  findOne(): any {
    return {
      id: '1',
      name: 'order',
    };
  }
}
