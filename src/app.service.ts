import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  health(): string {
    return 'Test Microservice is working!!!';
  }

  getHelloWithName(name: string): string {
    return 'Hello ' + name + '!';
  }
}
