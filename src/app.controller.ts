import { Controller, Get, Param, Headers } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('apis/test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  health(): string {
    return this.appService.health();
  }

  /**
   * Say hello using specified name 
   * @param name Name to be displayed
   */
  @Get(':name')
  getHelloWithName(@Param('name') name): string {
    return this.appService.getHelloWithName(name);
  }

  /**
   * Say hello using specified name 
   * @param name Name to be displayed
   */
  @Get('headers')
  getHeaders(@Headers() headers): string {
    return headers;
  }
}
