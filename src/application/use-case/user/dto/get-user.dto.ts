import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsNumberString, IsOptional, IsString, isNumber } from "class-validator";

export class GetUserDto {

    @ApiProperty()
    @IsNumberString()
    @IsOptional()
    id: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    login: string;
}

export type TypeGetUserDto = GetUserDto