import { Controller, Get, Param, Headers } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('apis/test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Headers() headers): string {
    console.log(headers)
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
