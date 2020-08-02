import { IUrlRepository } from '@/repositories/IUrlRepository'

import { IGetUrlResponseDTO, IGetUrlRequestDTO } from './IGetUrlDTO'

export class GetUrlUseCase {
  constructor (
    private urlRepository: IUrlRepository
  ) {}

  async execute (data:IGetUrlRequestDTO):Promise<IGetUrlResponseDTO> {
    const originalUrl = await this.urlRepository.findUrl(data.smallUrl)

    if (!originalUrl) throw new Error('URL not found')

    const now = new Date().toUTCString()

    if (originalUrl.expire < now) throw new Error('URL expired')

    return { originalUrl: originalUrl.url }
  }
}
