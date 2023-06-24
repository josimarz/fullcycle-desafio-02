import { Module } from '@nestjs/common';
import { AssetsModule } from './assets/assets.module';
import { PrismaModule } from './prisma/prisma.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [AssetsModule, PrismaModule, OrdersModule],
})
export class AppModule {}
