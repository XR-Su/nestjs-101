import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  create(customer) {
    console.log('create successfully with:', customer);
    return customer;
  }

  findOne(): any {
    return {
      id: '1',
      name: 'jack',
      meta: 'dec',
      isActive: false,
    };
  }
}
