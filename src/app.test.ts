import faker from 'faker'
import request from 'supertest'

import { app } from './app'
import { Url } from './entities/Url'
import { configTestTypeOrm } from './repositories/implementations/config/configPostgresTypeOrm'
import { helperTypeOrm } from './repositories/implementations/helpers/helperTypeOrm'

const generateNewUrl = () => {
  const structUrl = new Url({
    smallUrl: faker.random.alphaNumeric(5).toString(),
    url: faker.internet.url()
  })
  return structUrl
}

describe('App', () => {
  beforeAll(async () => {
    await helperTypeOrm.connect(configTestTypeOrm)
  })
  afterAll(async () => {
    await helperTypeOrm.disconnect()
  })
  beforeEach(async () => {
    await helperTypeOrm.clear()
  })
  describe('POST /', () => {
    test('Retorna 201 uma nova url', async () => {
      const response = await request(app)
        .post('/')
        .send({
          url: faker.internet.url()
        })

      expect(response.status).toEqual(201)
      expect(response.body.newUrl).toBeDefined()
      const uri = response.body.newUrl.split('/')[3] as string
      expect(uri.length).toBeGreaterThanOrEqual(5)
    })
  })
})
