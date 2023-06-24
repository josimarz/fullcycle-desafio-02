import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { AssetsController } from './assets.controller';
import { AssetsService } from './assets.service';

@Module({
  imports: [PrismaModule],
  providers: [AssetsService],
  controllers: [AssetsController],
})
export class AssetsModule {}
