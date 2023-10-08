import { Test } from '@nestjs/testing';
import { SaveUserDto } from '../../use-case/user/dto/save-user.dto';
import { GetUserDto } from '../../use-case/user/dto/get-user.dto';
import { GetUsersUseCase } from '../../use-case/user/get-user-usecase';
import { SaveUserUsecase } from '../../use-case/user/save-user-usecase';
import { UserController } from './user.controller';
import { QueryBus } from '@nestjs/cqrs';

describe('UserController', () => {
    let userController: UserController;
    let createUserUseCase: SaveUserUsecase;
    let getAllUserUseCase: GetUsersUseCase;


    const createUseMock = {
        execute: jest.fn(),
    };

    const getAllUserUseCaseMock = {
        execute: jest.fn(),
    }

    const queryBusMock = {
        execute: jest.fn(),
    }

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [UserController],
            providers: [
                {
                    provide: GetUsersUseCase,
                    useValue: getAllUserUseCaseMock
                },
                {
                    provide: SaveUserUsecase,
                    useValue: createUseMock,
                },
                {
                    provide: QueryBus,
                    useValue: queryBusMock,
                }
            ],
        }).compile();

        userController = moduleRef.get<UserController>(UserController);
        createUserUseCase = moduleRef.get<SaveUserUsecase>(SaveUserUsecase);
        getAllUserUseCase = moduleRef.get<GetUsersUseCase>(GetUsersUseCase);
    });

    describe('createUser', () => {
        it('should create a user', async () => {
            const createUserDto: SaveUserDto = {
                avatar_url: 'avatar_url',
                gravatar_id: 'gravatar_id',
                html_url: 'html_url',
                id: 1,
                login: 'login',
                node_id: 'node_id',
                url: 'url',
                followers_url: 'followers_url',
                following_url: 'following_url',
                gists_url: 'gists_url',
                starred_url: 'starred_url',
                subscriptions_url: 'subscriptions_url',
                organizations_url: 'organizations_url',
                repos_url: 'repos_url',
                events_url: 'events_url',
                received_events_url: 'received_events_url',
                site_admin: true,
                score: 1,
                type: 'type'
            };
            const expected = { message: 'User created successfully' };

            jest.spyOn(createUseMock, 'execute').mockResolvedValueOnce(expected);

            const result = await userController.saveUser(createUserDto);

            expect(createUserUseCase.execute).toHaveBeenCalledWith(createUserDto);
            expect(result).toEqual(expected);
        });
    });

      describe('getUser', () => {
        it('should return users', async () => {
          const getUsersDto: GetUserDto = {
            id: 111,
            login: 'johndoe@example.com',
          };
          const expected = [
            {
              id: '1234',
              fullname: 'John Doe',
              email: 'johndoe@example.com',
            },
          ];

          jest.spyOn(getAllUserUseCaseMock, 'execute').mockResolvedValueOnce(expected);

          const result = await userController.getUser(getUsersDto);

          expect(getAllUserUseCase.execute).toHaveBeenCalledWith(getUsersDto);
          expect(result).toEqual(expected);
        });
      });
});
