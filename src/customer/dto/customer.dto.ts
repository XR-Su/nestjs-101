import { Exclude, Expose, Transform, Type } from 'class-transformer';

@Exclude()
class Transaction {
  @Expose()
  productName: string;
  @Expose()
  dateTime: string;

  constructor(partial: Partial<Transaction>) {
    Object.assign(this, partial);
  }
}

@Exclude()
export class CustomerDto {
  @Expose() name: string;
  @Expose() isActive: boolean;
  @Expose()
  @Type(() => Transaction)
  transactions: Transaction[];

  constructor(customer?: Partial<any>) {
    Object.assign(this, customer);
  }
}
