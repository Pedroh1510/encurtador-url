import faker from 'faker'

import { Url } from '../../entities/Url'
import { configTestTypeOrm } from './../../repositories/implementations/config/configPostgresTypeOrm'
import { helperTypeOrm } from './../../repositories/implementations/helpers/helperTypeOrm'
import { TypeOrmUrlRepository } from './../../repositories/implementations/TypeOrmUrlRepository'
import { UrlRepositorySpy } from './../mocks/UrlRepositorySpy'
import { GetUrlUseCase } from './GetUrlUseCase'

const makeSut = () => {
  const urlRepositorySpy = new TypeOrmUrlRepository()
  const sut = new GetUrlUseCase(urlRepositorySpy)
  return {
    sut,
    urlRepositorySpy
  }
}

const generateNewUrl = () => {
  const structUrl = new Url({
    smallUrl: faker.random.alphaNumeric(5).toString(),
    url: faker.internet.url()
  })
  return structUrl
}

describe('Get Url use case', () => {
  beforeAll(async () => {
    await helperTypeOrm.connect(configTestTypeOrm)
  })
  afterAll(async () => {
    await helperTypeOrm.disconnect()
  })
  beforeEach(async () => {
    await helperTypeOrm.clear()
  })
  test('Retorna a original url', async () => {
    const { sut, urlRepositorySpy } = makeSut()
    const structUrl = generateNewUrl()
    await urlRepositorySpy.save(structUrl)
    const response = await sut.execute({ smallUrl: structUrl.smallUrl })
    expect(response.originalUrl).toEqual(structUrl.url)
  })
})
