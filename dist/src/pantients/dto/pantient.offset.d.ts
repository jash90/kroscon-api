import { PantientDto } from './pantient.dto';
export declare class PantientOffset {
    readonly rows: PantientDto[];
    readonly count: number;
    constructor(pantientOffset: PantientOffset);
}
