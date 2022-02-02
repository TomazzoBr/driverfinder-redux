import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getNest(): string {
    return 'Nest Works!';
  }
  getSomething(): string {
    return '{ first: first }';
  }
}
