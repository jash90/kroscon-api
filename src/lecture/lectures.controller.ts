import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiImplicitParam,
  ApiOkResponse,
  ApiUseTags
} from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { LectureDto } from "./dto/lecture.dto";
import { CreateLectureDto } from "./dto/create-lecture.dto";
import { UpdateLectureDto } from "./dto/update-lecture.dto";
import { LectureOffset } from "./dto/lecture.offset";
import { LecturesService } from "./lectures.service";

@Controller("lectures")
@ApiUseTags("lectures")
export class LecturesController {
  constructor(private readonly lecturesService: LecturesService) {}

  @Get()
  @ApiOkResponse({ type: [LectureDto] })
  findAll(): Promise<LectureDto[]> {
    return this.lecturesService.findAll();
  }

  @Get(":id")
  @ApiOkResponse({ type: LectureDto })
  @ApiImplicitParam({ name: "id", required: true })
  findOne(@Param("id", new ParseIntPipe()) id: number): Promise<LectureDto> {
    return this.lecturesService.findOne(id);
  }

  @Post()
  @ApiCreatedResponse({ type: LectureDto })
  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  create(@Body() createLectureDto: CreateLectureDto): Promise<LectureDto> {
    return this.lecturesService.create(createLectureDto);
  }

  @Put(":id")
  @ApiOkResponse({ type: LectureDto })
  @ApiImplicitParam({ name: "id", required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  update(
    @Param("id", new ParseIntPipe()) id: number,
    @Body() updateLectureDto: UpdateLectureDto
  ): Promise<LectureDto> {
    return this.lecturesService.update(id, updateLectureDto);
  }

  @Delete(":id")
  @ApiOkResponse({ type: LectureDto })
  @ApiImplicitParam({ name: "id", required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  delete(@Param("id", new ParseIntPipe()) id: number): Promise<LectureDto> {
    return this.lecturesService.delete(id);
  }

  @Get("offset/:id")
  @ApiOkResponse({ type: LectureOffset })
  offset(
    @Param("id", new ParseIntPipe()) index: number = 0
  ): Promise<LectureOffset> {
    return this.lecturesService.offset(index);
  }
}
