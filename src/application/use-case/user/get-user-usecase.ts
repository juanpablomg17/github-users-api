import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetUsersQuery } from '../../cqrs/query/user/get-users.query';
import { UseCase } from '../../../domain/interface/IUseCase';
import { GetUserDto } from './dto/get-user.dto';
import { SaveUserDto } from './dto/save-user.dto'

@Injectable()
export class GetUsersUseCase implements UseCase<GetUserDto, SaveUserDto[]> {
    constructor(private readonly queryBus: QueryBus) { }
    async execute(request?: GetUserDto): Promise<SaveUserDto[]> {
        return this.queryBus.execute<GetUsersQuery, SaveUserDto[]>(
            new GetUsersQuery(request)
        );
    }
}