import { getConnection } from 'typeorm'

import { Urls } from './../../entities/implementations/TypeOrmUrl'
import { Url } from './../../entities/Url'
import { IUrlRepository } from './../IUrlRepository'

export class TypeOrmUrlRepository implements IUrlRepository {
  async findUrl (smallUrl:string):Promise<Url> {
    const connection = await getConnection()

    const data = await connection.getRepository(Urls).findOne({ smallUrl })

    return data
  }

  async save (data:Url):Promise<void> {
    const connection = await getConnection()
    const url = new Urls()
    Object.assign(url, data)
    await connection.manager.save(url)
  }
}
