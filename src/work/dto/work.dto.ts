
import { IsOptional, IsString } from 'class-validator';

export class UpdateWorkDto {
  @IsOptional()
  @IsString()
  readonly title?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsString()
  readonly imageUrl?: string;

  @IsOptional()
  @IsString()
  readonly clientLink?: string;

  @IsOptional()
  @IsString()
  readonly status?: string;  
}
