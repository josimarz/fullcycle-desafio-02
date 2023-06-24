import { IsDecimal, IsNotEmpty, Matches } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @Matches(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i)
  readonly asset_id: string;

  @IsNotEmpty()
  @IsDecimal()
  readonly price: number;
}
