import { CommandBus } from '@nestjs/cqrs';
import { HttpException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../../../domain/user/services/user.service';
import { SaveUserCommand } from '../../cqrs/command/user/save-user.command';
import { SaveUserDto } from './dto/save-user.dto';
import { SaveUserUsecase } from './save-user-usecase';
import { GetUsersUseCase } from './get-user-usecase';
import { UserMapper } from '../../mapper/user-mapper';

describe('SaveUserUsecase', () => {
  let createUserUseCase: SaveUserUsecase;
  let commandBus: CommandBus;
  let getUserUseCase: GetUsersUseCase;

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

  const userModel = UserMapper.toPersistance(userDto);

  const userServiceMock = {
      isValidEmail: jest.fn(),
  }

  const getUserUseCaseMock = {
      execute: jest.fn(),
  }

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        SaveUserUsecase,
        {
          provide: CommandBus,
          useValue: {
            execute: jest.fn(),
          },
        },
        {
          provide: GetUsersUseCase,
          useValue: getUserUseCaseMock,
        },
        {
          provide: UserService,
          useValue: userServiceMock
        },
      ],
    }).compile();

    createUserUseCase = moduleRef.get<SaveUserUsecase>(SaveUserUsecase);
    commandBus = moduleRef.get<CommandBus>(CommandBus);
    getUserUseCase = moduleRef.get<GetUsersUseCase>(GetUsersUseCase);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('execute', () => {
    it('should return httpException when the user already exists', async () => {
      jest.spyOn(getUserUseCaseMock, 'execute').mockResolvedValueOnce([userModel]);
      jest.spyOn(userServiceMock, 'isValidEmail').mockReturnValueOnce(true);

      await expect(createUserUseCase.execute(userDto)).rejects.toThrow(HttpException);
    });

    it('should be return a valid response when the user does not exist', async () => {
      jest.spyOn(getUserUseCaseMock, 'execute').mockResolvedValueOnce([]);

      jest.spyOn(userServiceMock, 'isValidEmail').mockReturnValueOnce(false);

      jest.spyOn(commandBus, 'execute').mockResolvedValueOnce({ message: 'User created successfully' });

      await expect(createUserUseCase.execute(userDto)).resolves.toEqual({
        message: 'User created successfully'
      })
    });
  });
});
