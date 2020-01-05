import { Lecture } from './lecture.entity';

export const lecturesProviders = [{ provide: 'LecturesRepository', useValue: Lecture }];
