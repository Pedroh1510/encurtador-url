import { IUrlRepository } from '@/repositories/IUrlRepository'

import { Url } from '../../entities/Url'
import { generateRandomString } from './../../utils/generateRandomString'
import { ICreateUrlRequestDTO, ICreateUrlResponseDTO } from './CreateUrlDTO'

export class CreateUrlUseCase {
  constructor (
    private urlRepository: IUrlRepository
  ) {}

  async execute (data:ICreateUrlRequestDTO):Promise<ICreateUrlResponseDTO> {
    const smallUrl = generateRandomString()

    const objectUrls = {
      url: data.url,
      smallUrl
    }
    const url = new Url(objectUrls)

    await this.urlRepository.save(url)

    const prefixSmallUrl = `http://localhost:${process.env.PORT || 3333}`
    return {
      newUrl: `${prefixSmallUrl}/${smallUrl}`
    }
  }
}
