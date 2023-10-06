import { Column, Entity, PrimaryColumn } from 'typeorm';
import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { type } from 'os';


@Entity(
    'users'
)
@ObjectType() 
export class Users {
    @PrimaryColumn({unique: true, primary: true})
    @Field(() => ID)
    internal_id: string;

    @PrimaryColumn({ unique: true })
    @Field({ nullable: false })
    id: number; 
        
    @Column({ type: 'varchar', length: 255, nullable: true })
    @Field(type => String, { nullable: true })
    login: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    @Field(type => String, { nullable: true })
    node_id: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    @Field(type => String, { nullable: true })
    avatar_url: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    @Field(type => String, { nullable: true })
    gravatar_id: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    @Field(type => String, { nullable: true })
    url: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    @Field(type => String, { nullable: true })
    html_url: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    @Field(type => String, { nullable: true })
    followers_url: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    @Field(type => String, { nullable: true })
    following_url: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    @Field(type => String, { nullable: true })
    gists_url: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    @Field(type => String, { nullable: true })
    starred_url: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    @Field(type => String, { nullable: true })
    subscriptions_url: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    @Field(type => String, { nullable: true })
    organizations_url: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    @Field(type => String, { nullable: true })
    repos_url: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    @Field(type => String, { nullable: true })
    events_url: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    @Field(type => String, { nullable: true })
    received_events_url: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    @Field(type => String, { nullable: true })
    type: string | null;

    @Column({ type: 'boolean', nullable: true })
    @Field(type => Boolean, { nullable: true })
    site_admin: boolean | null;

    @Column({ type: 'int', nullable: true })
    @Field(type => Int, { nullable: true })
    score: number | null;
}
