import { Field, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateUserInput {
    @Field(() => Int,{ nullable: false})
    id: number;

    @IsNotEmpty()
    @Field({ nullable: true })
    login?: string;

    @Field({ nullable: true })
    node_id?: string;

    @Field({ nullable: true })
    avatar_url?: string;

    @Field({ nullable: true })
    gravatar_id?: string;

    @Field({ nullable: true })
    url?: string;

    @Field({ nullable: true })
    html_url?: string;

    @Field({ nullable: true })
    followers_url?: string;

    @Field({ nullable: true })
    following_url?: string;

    @Field({ nullable: true })
    gists_url?: string;

    @Field({ nullable: true })
    starred_url?: string;

    @Field({ nullable: true })
    subscriptions_url?: string;

    @Field({ nullable: true })
    organizations_url?: string;

    @Field({ nullable: true })
    repos_url?: string;

    @Field({ nullable: true })
    events_url?: string;

    @Field({ nullable: true })
    received_events_url?: string;

    @Field({ nullable: true })
    type?: string;

    @Field({ nullable: true })
    site_admin?: boolean;

    @Field(() => Int, { nullable: true })
    score?: number;
}
