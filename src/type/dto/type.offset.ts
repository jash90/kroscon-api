import { ApiModelProperty } from "@nestjs/swagger";
import { TypeDto } from "src/type/dto/type.dto";

export class TypeOffset {
  @ApiModelProperty()
  readonly rows: TypeDto[];
  @ApiModelProperty()
  readonly count: number;

  constructor(typeOffset: TypeOffset) {
    this.rows = typeOffset.rows;
    this.count = typeOffset.count;
  }
}
