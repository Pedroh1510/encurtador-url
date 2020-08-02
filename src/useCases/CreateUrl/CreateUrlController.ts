import { Response, Request } from 'express'

import { CreateUrlUseCase } from './CreateUrlUseCase'

export class CreateUrlController {
  constructor (
    private createUrlUseCase: CreateUrlUseCase
  ) {}

  async handle (request:Request, response:Response):Promise<Response> {
    try {
      const { url } = request.body

      const data = await this.createUrlUseCase.execute({ url })

      return response.status(201).json(data)
    } catch (error) {
      return response.status(404).json({
        message: error.message
      })
    }
  }
}
