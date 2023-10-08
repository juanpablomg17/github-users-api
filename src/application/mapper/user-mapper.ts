import { Users } from "../../infrastucture/repository/user/user.model";
import { SaveUserDto } from "../use-case/user/dto/save-user.dto";
import { v4 as uuidv4 } from 'uuid';
import { CreateUserInput } from "../use-case/user/dto/save-user.input.dto";


export class UserMapper {
    public static toPersistance(user: SaveUserDto | CreateUserInput): Users {
        const mappedUser = new Users();
        
        const {
            login,
            id,
            node_id,
            avatar_url,
            gravatar_id,
            url,
            html_url,
            followers_url,
            following_url,
            gists_url,
            starred_url,
            subscriptions_url,
            organizations_url,
            repos_url,
            events_url,
            received_events_url,
            type,
            site_admin,
            score
        } = user;

        const internalIdOutBuffer = uuidv4();
        mappedUser.internal_id = internalIdOutBuffer.toString();

        Object.assign(mappedUser, {
            id,
            login,
            node_id,
            avatar_url,
            gravatar_id,
            url,
            html_url,
            followers_url,
            following_url,
            gists_url,
            starred_url,
            subscriptions_url,
            organizations_url,
            repos_url,
            events_url,
            received_events_url,
            type,
            site_admin,
            score,
        });

        return mappedUser;
    }

}