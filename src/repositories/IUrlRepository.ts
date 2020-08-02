import { Url } from './../entities/Url'

export interface IUrlRepository{
  findUrl(smallUrl:string):Promise<Url>
  save(data:Url):Promise<void>
}
