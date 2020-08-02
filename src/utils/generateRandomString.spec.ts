import { generateRandomString } from './generateRandomString'

const makeSut = () => {
  const sut = generateRandomString
  return {
    sut
  }
}

describe('Generate Random String', () => {
  test('Generate random string with a minimum length of 5 and a maximum of 10', () => {
    const { sut } = makeSut()
    const randomString = sut()
    expect(randomString.length).toBeGreaterThanOrEqual(5)
    expect(randomString.length).toBeLessThanOrEqual(10)
  })
})
