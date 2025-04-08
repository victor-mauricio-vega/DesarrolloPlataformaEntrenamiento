import { Type } from "class-transformer";
import { IsOptional, IsPositive } from "class-validator";


export class PaginationDto{

    @IsOptional()
    @IsPositive()
    @Type(() => Number)
    pagina?: number = 1;

    @IsOptional()
    @IsPositive()
    @Type(() => Number)
    limite?: number = 8;

}