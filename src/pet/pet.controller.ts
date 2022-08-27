import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('pet')
export class PetController {
  constructor(private readonly appService: AppService) {
  }
    @Get('getInfoApi') 
    async getPets() {
      return this.appService.getInfoPets()
    }
}
