import { UrlRepositorySpy } from '../mocks/UrlRepositorySpy'
import { ICreateUrlRequestDTO } from './CreateUrlDTO'
import { CreateUrlUseCase } from './CreateUrlUseCase'

const makeSut = () => {
  const urlRepositorySpy = new UrlRepositorySpy()
  const sut = new CreateUrlUseCase(urlRepositorySpy)
  return {
    sut,
    urlRepositorySpy
  }
}

describe('Create Url Use Case', () => {
  test('Retorna uma nova url', async () => {
    const { sut } = makeSut()
    const data:ICreateUrlRequestDTO = {
      url: 'test'
    }
    const response = await sut.execute(data)
    expect(response.newUrl).not.toEqual(data.url)
  })
  test('Garante que o repositório esta recebendo os dados', async () => {
    const { sut, urlRepositorySpy } = makeSut()
    const data:ICreateUrlRequestDTO = {
      url: 'test'
    }
    await sut.execute(data)
    expect(data.url).toEqual(urlRepositorySpy.url)
  })
})
