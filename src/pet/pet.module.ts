import { Module } from '@nestjs/common';
import { PetController } from './pet.controller';
import { AppService } from 'src/app.service';

@Module({
  controllers: [PetController],
  providers: [AppService],
})
export class PetModule {}
