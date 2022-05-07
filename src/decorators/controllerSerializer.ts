import {
  applyDecorators,
  ClassSerializerInterceptor,
  SerializeOptions,
  UseInterceptors,
} from '@nestjs/common';

export function ControllerSerializer() {
  return applyDecorators(
    SerializeOptions({
      excludeExtraneousValues: true,
    }),
    UseInterceptors(ClassSerializerInterceptor),
  );
}
