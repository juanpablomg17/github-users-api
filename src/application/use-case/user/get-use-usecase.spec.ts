import { Test, TestingModule } from '@nestjs/testing';
import { QueryBus } from '@nestjs/cqrs';
import { GetUsersUseCase } from './get-user-usecase';
import { GetUserDto } from './dto/get-user.dto';
import { SaveUserDto } from './dto/save-user.dto';

describe('GetUsersUseCase', () => {
  let getUsersUseCase: GetUsersUseCase;
  let queryBus: QueryBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetUsersUseCase,
        {
          provide: QueryBus,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    getUsersUseCase = module.get<GetUsersUseCase>(GetUsersUseCase);
    queryBus = module.get<QueryBus>(QueryBus);
  });

  describe('execute', () => {
    it('should return an array of user DTOs', async () => {
      // Arrange
      const request: GetUserDto = { login: 'John Doe', id: 1 };
      const userDto: SaveUserDto = {
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

      jest.spyOn(queryBus, 'execute').mockResolvedValueOnce(userDto);

      // Act
      const result = await getUsersUseCase.execute(request);

      // Assert
      expect(result).toEqual(userDto);
    });
  });
});
