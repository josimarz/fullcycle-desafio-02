import { Injectable } from '@nestjs/common';
import { Asset } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAssetDto } from './dto/create-asset.dto';

@Injectable()
export class AssetsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createAssetDto: CreateAssetDto): Promise<Asset> {
    return this.prisma.asset.create({ data: createAssetDto });
  }

  getAll(): Promise<Asset[]> {
    return this.prisma.asset.findMany({ include: { Order: true } });
  }
}
