import { resolve } from 'path'
import { ConnectionOptions } from 'typeorm'

import { Urls } from '../../../entities/implementations/TypeOrmUrl'

export const configPostgresTypeOrm:ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: 5432,
  username: process.env.DB_USERNAME || 'POSTGRES_USER',
  password: process.env.DB_PASSWORD || 'POSTGRES_PASSWORD',
  entities: [Urls],
  synchronize: true
}
export const configTestTypeOrm:ConnectionOptions = {
  type: 'sqljs',
  location: resolve('data', 'SQL'),
  dropSchema: true,
  entities: [Urls],
  synchronize: true
}
