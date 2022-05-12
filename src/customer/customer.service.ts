import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  findOne(): any {
    return {
      id: '1',
      name: 'jack',
      meta: 'dec',
      isActive: false,
      transactions: [
        {
          orderId: '1',
          productName: 'macbookpro2021',
          type: 'wx',
          dateTime: '2022-02-22',
        },
      ],
    };
  }
}
