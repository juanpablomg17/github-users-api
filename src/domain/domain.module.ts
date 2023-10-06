import { Module } from '@nestjs/common';

import { UserService } from './user/services/user.service'
@Module({
  providers: [
    UserService
  ],
  exports: [
    UserService
  ],
})
export class DomainModule {}
