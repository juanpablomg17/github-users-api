import { Users } from '../../../../infrastucture/repository/user/user.model'

export class SaveUserCommand {
    constructor(
        public readonly userData: Users,
    ) {}
}