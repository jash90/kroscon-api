import { ApiProperty } from '@nestjs/swagger';
import { PrivilegeDto } from './privilege.dto';
export class PrivilegeOffset {
  @ApiProperty()
  readonly rows: PrivilegeDto[];
  @ApiProperty()
  readonly count: number;

  constructor(privilegeOffset: PrivilegeOffset) {
    this.rows = privilegeOffset.rows;
    this.count = privilegeOffset.count;
  }
}
