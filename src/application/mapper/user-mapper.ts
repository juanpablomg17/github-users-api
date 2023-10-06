import { Users } from "src/infrastucture/repository/user/user.model";
import { SaveUserDto } from "../use-case/user/dto/save-user.dto";
import { v4 as uuidv4 } from 'uuid';


export class UserMapper {
    public static toPersistance(user: SaveUserDto): Users {
        const mappedUser = new Users();

        // Mapear los campos comunes entre SaveUserDto y Users
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

        mappedUser.internal_id = uuidv4(15);

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