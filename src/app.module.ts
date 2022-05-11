import { Module, MiddlewareConsumer } from '@nestjs/common';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { LoggerMiddleware } from './middleware/logger.middleware'

@Module({
  imports: [],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
