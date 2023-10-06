import { InjectRepository } from '@nestjs/typeorm';

import { IUserRepository } from '../../../domain/interface/IUser';
import { FindOptionsWhere, Repository } from 'typeorm'
import { Users } from './user.model';

import { TypeGetUserDto } from '../../../application/use-case/user/dto/get-user.dto'



type QueryFilter = TypeGetUserDto

export class UserRepository implements IUserRepository<QueryFilter, Users, unknown | Users>{

    constructor(@InjectRepository(Users) private userRepository: Repository<Users>) { }


    async getAll(filter?: QueryFilter): Promise<Users[]> {
        try {
            return this.userRepository.find();
        } catch (error) {
            console.log('HOUSTON WE HAVE A PROBLEM IN UserRepository (getAll method): ERROR: ', error)
        }
    }
    getByKey(filter: QueryFilter): Promise<Users[]> {
        try {
            const findOptionsUser: FindOptionsWhere<Users> = {
                id: filter.id,
                login: filter.login,
            }
            return this.userRepository.findBy(findOptionsUser);
        } catch (error) {
            console.log('HOUSTON WE HAVE A PROBLEM IN UserRepository (getByKey method): ERROR: ', error)
        }
    }
    
    save(input: Users): Promise<Users> {
        try {
            const newUser = this.userRepository.create(input);
            return this.userRepository.save(newUser);
        } catch (error) {
            console.log('HOUSTON WE HAVE A PROBLEM IN UserRepository (save method): ERROR: ', error)
        }
    }
}