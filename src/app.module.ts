import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PetModule } from './pet/pet.module';

@Module({
  imports: [PetModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
