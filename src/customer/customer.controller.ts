import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  UseFilters,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { GetCustomerDto } from './dto/get-customer.dto';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerException } from '../exception/customer.exception';
import { CommonHttpExceptionFilter } from '../filter/common-http-exception.filter';
import { CommonException } from '../exception/common.exception';
import {TransformInterceptor} from "../interceptor/transform.interceptor";

@Controller('customer')
@UseInterceptors(ClassSerializerInterceptor)
@UsePipes(
  new ValidationPipe({
    transform: true,
  }),
)
@UseFilters(CommonHttpExceptionFilter)
@UseInterceptors(TransformInterceptor)
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() customer: CreateCustomerDto): any {
    return this.customerService.create(customer);
  }

  @Get()
  findOne(): any {
    // throw new HttpException('findOne error', HttpStatus.BAD_REQUEST);
    throw new CustomerException();
    const customer = this.customerService.findOne();
    return new GetCustomerDto(customer);
  }
}
