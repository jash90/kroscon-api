import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from './user.dto';

export class UserOffset {
  @ApiProperty()
  readonly rows: UserDto[];
  @ApiProperty()
  readonly count: number;

  constructor(userOffset: UserOffset) {
    this.rows = userOffset.rows;
    this.count = userOffset.count;
  }
}
