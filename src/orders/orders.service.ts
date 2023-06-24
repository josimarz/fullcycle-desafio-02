import { Injectable } from '@nestjs/common';
import { Order, OrderStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.prisma.order.create({
      data: {
        ...createOrderDto,
        status: OrderStatus.Open,
      },
      include: { asset: true },
    });
  }

  getAll(): Promise<Order[]> {
    return this.prisma.order.findMany({ include: { asset: true } });
  }
}
