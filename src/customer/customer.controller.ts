import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerEntity } from './dto/customer.dto';

@Controller('customer')
@UseInterceptors(ClassSerializerInterceptor)
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  findOne(): any {
    const customer = this.customerService.findOne();
    return new CustomerEntity(customer);
  }
}
