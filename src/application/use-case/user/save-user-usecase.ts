import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { SaveUserCommand } from '../../cqrs/command/user/save-user.command'
import { UserMapper } from '../../mapper/user-mapper';
import { SaveUserDto } from './dto/save-user.dto'
import { CreateUserInput } from './dto/save-user.input.dto'
import { UseCase } from '../../../domain/interface/IUseCase';
import { GetUsersUseCase } from './get-user-usecase'




type Input = SaveUserDto | CreateUserInput
type Output = void

@Injectable()
export class SaveUserUsecase implements UseCase<Input, Output> {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly getUserUseCase: GetUsersUseCase,
    ) { }

    async execute(input: Input): Promise<Output> {
        const user = await this.getUserUseCase.execute({
            id: input.id,
            login: input.login
        })
        if (user.length > 0) {
            throw new HttpException('User already exists', HttpStatus.BAD_REQUEST)
        }
        const userModel = UserMapper.toPersistance(input);
        const response = await this.commandBus.execute(new SaveUserCommand(userModel));
        return response
    }
}
