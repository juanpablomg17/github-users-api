import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class Users {

    @PrimaryColumn({unique: true, primary: true})                                                                                   
    internal_id: string;

    @PrimaryColumn({ unique: true })
    id: number; 

    @Column({ type: 'varchar', length: 255, nullable: true }) // Permitir nulo para campos opcionales
    fullname: string | null;

    @Column({ type: 'varchar', length: 255, unique: true })
    email: string;

    // Agregar otras propiedades del JSON como columnas si son relevantes para tu aplicación
    @Column({ type: 'varchar', length: 255, nullable: true })
    login: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    node_id: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    avatar_url: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    gravatar_id: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    url: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    html_url: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    followers_url: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    following_url: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    gists_url: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    starred_url: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    subscriptions_url: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    organizations_url: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    repos_url: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    events_url: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    received_events_url: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    type: string | null;

    @Column({ type: 'boolean', nullable: true })
    site_admin: boolean | null;

    @Column({ type: 'int', nullable: true })
    score: number | null;
}
