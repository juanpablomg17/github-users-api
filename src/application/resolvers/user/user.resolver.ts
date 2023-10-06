import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";

import { GetUsersUseCase } from "../../use-case/user/get-user-usecase";
import { SaveUserUsecase } from '../../use-case/user/save-user-usecase';
import { Users } from '../../../infrastucture/repository/user/user.model'
import { CreateUserInput } from "../../use-case/user/dto/save-user.input.dto";



@Resolver()
export class UserResolver {
    constructor(
        private readonly getUsersUseCase: GetUsersUseCase,
        private readonly saveUserUseCase: SaveUserUsecase,
    ) { }

    @Query((returns) => [Users])
    users() {
        return this.getUsersUseCase.execute();
    }

    @Query((returns) => [Users])
    getUsersByFilter(@Args('id', { nullable: true }) id: number, @Args('login', {nullable: true}) login?: string) {
        return this.getUsersUseCase.execute({ id, login });
    }

    @Mutation((returns ) => Users)
    saveUser(@Args('userInput') user: CreateUserInput) {
        return this.saveUserUseCase.execute(user);
    }
}