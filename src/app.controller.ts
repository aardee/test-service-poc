import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * Say hello using specified name 
   * @param name Name to be displayed
   */
  @Get(':name')
  getHelloWithName(@Param('name') name): string {
    return this.appService.getHelloWithName(name);
  }
}
