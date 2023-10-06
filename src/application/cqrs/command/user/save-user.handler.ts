import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { IUserRepository, USER_REPOSITORY } from '../../../../domain/interface/IUser';
import { Users } from '../../../../infrastucture/repository/user/user.model';
import { SaveUserCommand } from './save-user.command';

@CommandHandler(SaveUserCommand)
export class SaveUserHandler implements ICommandHandler<SaveUserCommand, Users> {
    constructor(@Inject(USER_REPOSITORY) private readonly repository: IUserRepository<string, Users, Users>) { }
    async execute(command: SaveUserCommand) {
        const { userData } = command
        return this.repository.save(userData)
    }
}
