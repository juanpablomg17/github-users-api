import {  DataSource, DataSourceOptions } from 'typeorm' 
import 'dotenv/config';




export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [process.env.TYPEORM_ENTITIES],
        synchronize: true,
        migrations: [process.env.TYPEORM_MIGRATIONS],
        migrationsTableName: process.env.TYPEORM_MIGRATIONS_TABLE_NAME || 'migrations',
}



const dataSource = new DataSource(dataSourceOptions)

export default dataSource