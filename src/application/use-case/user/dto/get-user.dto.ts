import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, isNumber } from "class-validator";

export class GetUserDto {

    @ApiProperty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsString()
    login: string;
}

export type TypeGetUserDto = GetUserDto