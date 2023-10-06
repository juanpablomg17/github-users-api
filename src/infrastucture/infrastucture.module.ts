import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import 'dotenv/config';

import { USER_REPOSITORY } from '../domain/interface/IUser';

import { UserRepository } from './repository/user/user-repository'

import { Users } from './repository/user/user.model'



@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
  ],
  providers: [
    {
      provide: USER_REPOSITORY,
      useClass: UserRepository,
    },
    
  ],
  exports: [
    {
      provide: USER_REPOSITORY,
      useClass: UserRepository,
    },
  ],
})
export class InfrastructureModule { }
