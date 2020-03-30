import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Test Microservice';
  }

  getHelloWithName(name: string): string {
    return 'Hello ' + name + '!';
  }
}
