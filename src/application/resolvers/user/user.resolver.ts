import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { GetUsersUseCase } from "../../use-case/user/get-user-usecase";
import { Users } from '../../../infrastucture/repository/user/user.model'



@Resolver()
export class UserResolver {
    constructor(
        private readonly getUsersUseCase: GetUsersUseCase,
    ) { }

    @Query((returns) => [Users])
    users() {
        return this.getUsersUseCase.execute();
    }

    @Query((returns) => [Users])
    getUsersByFilter(@Args('id', { nullable: true }) id: number, @Args('login', {nullable: true}) login?: string) {
        return this.getUsersUseCase.execute({ id, login });
    }
}