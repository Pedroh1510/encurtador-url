import { TypeOrmUrlRepository } from '../../repositories/implementations/TypeOrmUrlRepository'
import { GetUrlController } from './GetUrlController'
import { GetUrlUseCase } from './GetUrlUseCase'

const typeOrmUrlRepository = new TypeOrmUrlRepository()

const getUrlUseCase = new GetUrlUseCase(typeOrmUrlRepository)

const getUrlController = new GetUrlController(getUrlUseCase)

export { getUrlController, getUrlUseCase }
