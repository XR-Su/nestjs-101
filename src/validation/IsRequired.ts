import {
  IsNotEmpty,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export const IsRequired = (validationOptions?: ValidationOptions) =>
  IsNotEmpty({
    ...validationOptions,
    message: (validationArguments: ValidationArguments) =>
      `${validationArguments.property} is a required field`,
  });
