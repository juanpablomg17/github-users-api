import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


import { GetUsersUseCase } from '../../use-case/user/get-user-usecase';

import { GetUserDto } from '../../use-case/user/dto/get-user.dto';
import { SaveUserDto } from '../../use-case/user/dto/save-user.dto';
import { SaveUserUsecase } from '../../use-case/user/save-user-usecase';


@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(
        private readonly getAllUserUseCase: GetUsersUseCase,
        private readonly saveUserUseCase: SaveUserUsecase,
    ) { }
 

    @Get('')
    async getUser(@Query() request: GetUserDto) {
        return await this.getAllUserUseCase.execute(request);
    }

    @Post('')
    async saveUser(@Body() request: SaveUserDto) {
        return await this.saveUserUseCase.execute(request);
    }
}
