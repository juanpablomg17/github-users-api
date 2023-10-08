import { Repository } from 'typeorm';
import { UserRepository } from './user-repository';
import { Users } from './user.model';

const userModelMockExample = 
    {
        internal_id: 'unique_id',
        id: 123456,
        login: 'example_user',
        node_id: 'node_id_value',
        avatar_url: 'https://example.com/avatar.png',
        gravatar_id: 'gravatar_id_value',
        url: 'https://example.com/user',
        html_url: 'https://github.com/example_user',
        followers_url: 'https://api.github.com/users/example_user/followers',
        following_url: 'https://api.github.com/users/example_user/following{/other_user}',
        gists_url: 'https://api.github.com/users/example_user/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/example_user/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/example_user/subscriptions',
        organizations_url: 'https://api.github.com/users/example_user/orgs',
        repos_url: 'https://api.github.com/users/example_user/repos',
        events_url: 'https://api.github.com/users/example_user/events{/privacy}',
        received_events_url: 'https://api.github.com/users/example_user/received_events',
        type: 'User',
        site_admin: false,
        score: 99,
}

describe('UserRepository', () => {
    let userRepository: UserRepository;
    let mockRepository: jest.Mocked<Repository<Users>>;

    beforeEach(() => {
        mockRepository = {
            find: jest.fn(),
            findBy: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
        } as unknown as jest.Mocked<Repository<Users>>;

        userRepository = new UserRepository(mockRepository);
    });

    it('Should be defined', () => {
        expect(userRepository).toBeDefined();
    });

    it('should call find method when getAll is called', async () => {
        const mockData: Users[] = [
            {
                internal_id: 'unique_id',
                id: 123456,
                login: 'example_user',
                node_id: 'node_id_value',
                avatar_url: 'https://example.com/avatar.png',
                gravatar_id: 'gravatar_id_value',
                url: 'https://example.com/user',
                html_url: 'https://github.com/example_user',
                followers_url: 'https://api.github.com/users/example_user/followers',
                following_url: 'https://api.github.com/users/example_user/following{/other_user}',
                gists_url: 'https://api.github.com/users/example_user/gists{/gist_id}',
                starred_url: 'https://api.github.com/users/example_user/starred{/owner}{/repo}',
                subscriptions_url: 'https://api.github.com/users/example_user/subscriptions',
                organizations_url: 'https://api.github.com/users/example_user/orgs',
                repos_url: 'https://api.github.com/users/example_user/repos',
                events_url: 'https://api.github.com/users/example_user/events{/privacy}',
                received_events_url: 'https://api.github.com/users/example_user/received_events',
                type: 'User',
                site_admin: false,
                score: 99,
            },
            {
                internal_id: 'unique_id',
                id: 123457,
                login: 'example_user',
                node_id: 'node_id_value',
                avatar_url: 'https://example.com/avatar.png',
                gravatar_id: 'gravatar_id_value',
                url: 'https://example.com/user',
                html_url: 'https://github.com/example_user',
                followers_url: 'https://api.github.com/users/example_user/followers',
                following_url: 'https://api.github.com/users/example_user/following{/other_user}',
                gists_url: 'https://api.github.com/users/example_user/gists{/gist_id}',
                starred_url: 'https://api.github.com/users/example_user/starred{/owner}{/repo}',
                subscriptions_url: 'https://api.github.com/users/example_user/subscriptions',
                organizations_url: 'https://api.github.com/users/example_user/orgs',
                repos_url: 'https://api.github.com/users/example_user/repos',
                events_url: 'https://api.github.com/users/example_user/events{/privacy}',
                received_events_url: 'https://api.github.com/users/example_user/received_events',
                type: 'User',
                site_admin: false,
                score: 99,
            },
        ];

        mockRepository.find.mockResolvedValueOnce(mockData);

        const result = await userRepository.getAll();

        expect(mockRepository.find).toHaveBeenCalled();
        expect(result).toEqual(mockData);
    });

    it('should call findBy method with correct options when getByKey is called', async () => {
        const mockFilter = { id: 1, login: "example_user" };

        const mockData: Users[] = [userModelMockExample];

        mockRepository.findBy.mockResolvedValueOnce(mockData);

        const result = await userRepository.getByKey(mockFilter);

        expect(mockRepository.findBy).toHaveBeenCalledWith({
            id: mockFilter.id,
            login: mockFilter.login,
        });
        expect(result).toEqual(mockData);
    });

    it('should call create and save methods when save is called', async () => {
        const mockUser: Users = userModelMockExample;

        mockRepository.create.mockReturnValueOnce(mockUser);
        mockRepository.save.mockResolvedValueOnce(mockUser);

        const result = await userRepository.save(mockUser);

        expect(mockRepository.create).toHaveBeenCalledWith(mockUser);
        expect(mockRepository.save).toHaveBeenCalledWith(mockUser);
        expect(result).toEqual(mockUser);
    });
});