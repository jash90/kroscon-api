import { Pantient } from '../pantient.entity';
export declare class PantientDto {
    readonly id: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly postcode: string;
    readonly street: string;
    readonly city: string;
    readonly phone: string;
    readonly pesel: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    constructor(pantient: Pantient);
}
