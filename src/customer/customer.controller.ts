import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  UseFilters,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CommonHttpExceptionFilter } from '../filter/common-http-exception.filter';
import { TransformInterceptor } from '../interceptor/transform.interceptor';
import { ParseParameterPipe } from '../pipe/parse-parameter.pipe';

@Controller('customer')
@UseInterceptors(ClassSerializerInterceptor)
@UsePipes(
  new ValidationPipe({
    transform: true,
  }),
)
@UseFilters(CommonHttpExceptionFilter)
@UseInterceptors(TransformInterceptor)
@UsePipes(ParseParameterPipe)
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() customer: CreateCustomerDto): any {
    return this.customerService.create(customer);
  }

  @Get()
  findOne(): any {
    const customer = this.customerService.findOne();
    return customer;
  }
}
