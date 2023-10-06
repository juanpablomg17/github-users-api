import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1696569203659 implements MigrationInterface {
    name = 'Migrations1696569203659'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("internal_id" character varying NOT NULL, "id" integer NOT NULL, "fullname" character varying(255), "email" character varying(255) NOT NULL, "login" character varying(255), "node_id" character varying(255), "avatar_url" character varying(255), "gravatar_id" character varying(255), "url" character varying(255), "html_url" character varying(255), "followers_url" character varying(255), "following_url" character varying(255), "gists_url" character varying(255), "starred_url" character varying(255), "subscriptions_url" character varying(255), "organizations_url" character varying(255), "repos_url" character varying(255), "events_url" character varying(255), "received_events_url" character varying(255), "type" character varying(255), "site_admin" boolean, "score" integer, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_79fa3fdb826b8e6d940c3173d16" PRIMARY KEY ("internal_id", "id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
