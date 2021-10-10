import { ApiProperty } from '@nestjs/swagger';
import { MechanicDto } from './mechanic.dto';

export class MechanicOffset {
  @ApiProperty()
  readonly rows: MechanicDto[];
  @ApiProperty()
  readonly count: number;

  constructor(mechanicOffset: MechanicOffset) {
    this.rows = mechanicOffset.rows;
    this.count = mechanicOffset.count;
  }
}
