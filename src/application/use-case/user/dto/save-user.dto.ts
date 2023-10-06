import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class SaveUserDto {

    @ApiProperty()
    @IsString()
    login: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsString()
    node_id: string;

    @ApiProperty()
    @IsString()
    avatar_url: string;

    @ApiProperty()
    gravatar_id: string;

    @ApiProperty()
    @IsString()
    url: string;

    @ApiProperty()
    @IsString()
    html_url: string;

    @ApiProperty()
    @IsString()
    followers_url: string;

    @ApiProperty()
    @IsString()
    following_url: string;

    @ApiProperty()
    @IsString()
    gists_url: string;

    @ApiProperty()
    @IsString()
    starred_url: string;

    @ApiProperty()
    @IsString()
    subscriptions_url: string;

    @ApiProperty()
    @IsString()
    organizations_url: string;

    @ApiProperty()
    @IsString()
    repos_url: string;

    @ApiProperty()
    @IsString()
    events_url: string;

    @ApiProperty()
    @IsString()
    received_events_url: string;

    @ApiProperty()
    @IsString()
    type: string;

    @ApiProperty()
    site_admin: boolean;

    @ApiProperty()
    score: number;
}