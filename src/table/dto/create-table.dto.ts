import { ApiProperty } from '@nestjs/swagger';

export class CreateTableDto {
  @ApiProperty({
    description: 'O numero da mesa',
    example: 1,
  })
  number: number;
}
