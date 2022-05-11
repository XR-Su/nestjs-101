import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { BankModule } from '../bank/bank.module';

@Module({
  imports: [BankModule],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
