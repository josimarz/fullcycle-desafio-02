import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateAssetDto {
  @IsNotEmpty()
  @Matches(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i)
  readonly id: string;

  @IsNotEmpty()
  @IsString()
  readonly symbol: string;
}
