
import { TypeOrmUrlRepository } from '../../repositories/implementations/TypeOrmUrlRepository'
import { CreateUrlController } from './CreateUrlController'
import { CreateUrlUseCase } from './CreateUrlUseCase'

const typeOrmUrlRepository = new TypeOrmUrlRepository()

const createUrlUseCase = new CreateUrlUseCase(typeOrmUrlRepository)
const createUrlController = new CreateUrlController(createUrlUseCase)

export { createUrlUseCase, createUrlController }
