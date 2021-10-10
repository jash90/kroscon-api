import { ApiProperty } from '@nestjs/swagger';
import { Feedback } from '../feedback.entity';

export class FeedbackDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly rating: number;

  @ApiProperty()
  readonly userId: number;

  @ApiProperty()
  readonly firstnameUser: string;

  @ApiProperty()
  readonly lastnameUser: string;

  @ApiProperty()
  readonly boardGameId: number;

  @ApiProperty()
  readonly nameBoardGame: string;

  @ApiProperty()
  readonly loanGameId: number;

  @ApiProperty()
  readonly startLoanGame: Date;

  @ApiProperty()
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
