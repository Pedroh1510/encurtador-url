import { IUrlRepository } from '@/repositories/IUrlRepository'
import faker from 'faker'

import { Url } from '../../entities/Url'

export class UrlRepositorySpy implements IUrlRepository {
  smallUrl: string
  url:string
  structUrl:Url
  async findUrl (smallUrl:string):Promise<Url> {
    const url = this.url
    const newUrl = new Url({ smallUrl, url })
    return newUrl
  }

  async save (data:Url):Promise<void> {
    this.structUrl = data
    this.url = data.url
    this.smallUrl = data.smallUrl
  }

  init ():void {
    this.smallUrl = faker.random.alphaNumeric(5)
    this.url = faker.internet.url()
    this.structUrl = new Url({ smallUrl: this.smallUrl, url: this.url })
  }
}
