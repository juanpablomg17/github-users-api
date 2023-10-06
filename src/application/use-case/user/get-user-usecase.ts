import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetUsersQuery } from '../../cqrs/query/user/get-users.query';
import { UseCase } from '../../../domain/interface/IUseCase';
import { GetUserDto } from './dto/get-user.dto';

import { Users } from '../../../infrastucture/repository/user/user.model'

@Injectable()
export class GetUsersUseCase implements UseCase<GetUserDto, Users[]> {
    constructor(private readonly queryBus: QueryBus) { }
    async execute(request?: GetUserDto): Promise<Users[]> {
        return this.queryBus.execute<GetUsersQuery, Users[]>(
            new GetUsersQuery(request)
        );
    }
}