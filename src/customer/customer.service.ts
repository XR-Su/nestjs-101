import { Injectable } from '@nestjs/common';
import { BankService } from '../bank/bank.service';

@Injectable()
export class CustomerService {
  constructor(private bank: BankService) {}
  create(customer) {
    console.log('create successfully with:', customer);
    return customer;
  }

  findOne(): any {
    const bank = this.bank.findOne();
    return {
      id: '1',
      name: 'jack',
      meta: 'dec',
      isActive: false,
      bank,
    };
  }
}
