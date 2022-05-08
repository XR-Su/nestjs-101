import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDto } from './dto/customer.dto';
import { ControllerSerializer } from '../decorators/controllerSerializer';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  // @ControllerSerializer()
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(): any {
    const customer = this.customerService.findOne();
    return new CustomerDto(customer);
  }
}
