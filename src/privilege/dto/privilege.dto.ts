import { ApiProperty } from '@nestjs/swagger';
import { Privilege } from '../privilege.entity';

export class PrivilegeDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly name: string;

  constructor(privilege: Privilege) {
    this.id = privilege.id;
    this.name = privilege.name;
  }
}
