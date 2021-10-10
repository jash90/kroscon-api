import { ApiProperty } from '@nestjs/swagger';
import { Mechanic } from '../mechanic.entity';

export class MechanicDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly name: string;

  constructor(mechanic: Mechanic) {
    this.id = mechanic.id;
    this.name = mechanic.name;
  }
}
