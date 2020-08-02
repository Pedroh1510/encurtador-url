import { Request, Response } from 'express'

import { GetUrlUseCase } from './GetUrlUseCase'

export class GetUrlController {
  constructor (
    private getUrlUseCase: GetUrlUseCase
  ) {}

  async handle (request: Request, response: Response):Promise<void> {
    try {
      const { smallUrl } = request.params

      const data = await this.getUrlUseCase.execute({ smallUrl })

      response.location(data.originalUrl)
      return response.redirect(301, data.originalUrl)
    } catch (error) {
      response.status(404).json({
        message: error.message
      })
    }
  }
}
