import { ApiModelProperty } from "@nestjs/swagger";
import { Feedback } from "../feedback.entity";

export class FeedbackDto {
  @ApiModelProperty()
  readonly id: number;

  @ApiModelProperty()
  readonly rating: number;

  @ApiModelProperty()
  readonly userId: number;

  @ApiModelProperty()
  readonly firstnameUser: string;

  @ApiModelProperty()
  readonly lastnameUser: string;

  @ApiModelProperty()
  readonly boardGameId: number;

  @ApiModelProperty()
  readonly nameBoardGame: string;

  @ApiModelProperty()
  readonly loanGameId: number;

  @ApiModelProperty()
  readonly startLoanGame: Date;

  @ApiModelProperty()
  readonly endLoanGame: Date;

  constructor(feedback: Feedback) {
    this.id = feedback.id;
    this.rating = feedback.rating;
    this.firstnameUser = feedback.user.firstname;
    this.lastnameUser = feedback.user.lastname;
    this.nameBoardGame = feedback.boardGame.name;
    this.startLoanGame = feedback.loanGame.start;
    this.endLoanGame = feedback.loanGame.end;
  }
}
