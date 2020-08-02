import crypto from 'crypto'

export const generateRandomString = () => {
  const length = Math.floor(Math.random() * (11 - 5) + 5)
  return crypto.randomBytes(length).toString('hex').slice(0, length)
}
