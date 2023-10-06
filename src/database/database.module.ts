import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import 'dotenv/config';

import { dataSourceOptions} from './data-source';


@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
  ],
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? process.env.API_KEY_PROD : process.env.API_KEY
    },
  ],
  exports: [
    'API_KEY', TypeOrmModule,
  ],
})
export class DataBaseModule { }
