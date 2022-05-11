import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseParameterPipe implements PipeTransform<string> {
  async transform(value: string, metadata: ArgumentMetadata) {
    console.log('pipe', value);
    console.log(value);
    return value;
  }
}
