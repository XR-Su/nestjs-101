import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsValidCustomerName(
  property?: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'isValidCustomerName',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate: (value) => {
          return value === 'jack';
        },
        defaultMessage: () => 'customer name error',
      },
    });
  };
}
