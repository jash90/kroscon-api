import { Visit } from '../visit.entity';
export declare class VisitDto {
    readonly id: number;
    readonly doctorId: number;
    readonly doctorFirstName: string;
    readonly doctorLastName: string;
    readonly pantientId: number;
    readonly pantientFirstName: string;
    readonly pantientLastName: string;
    readonly date: Date;
    readonly description: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    constructor(visit: Visit);
}
