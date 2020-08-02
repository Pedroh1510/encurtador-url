import { v4 } from 'uuid'

export class Url {
  public readonly id: string

  public url:string

  public smallUrl: string

  public readonly createAt: string

  public readonly expire: string

  constructor (props: Omit<Url, 'id'|'createAt'|'expire'>) {
    Object.assign(this, props)

    if (!this.id) {
      this.id = v4()
    }
    if (!this.createAt) {
      this.createAt = new Date().toUTCString()
    }
    if (!this.expire) {
      const now = new Date()
      now.setHours(now.getHours() + 3)
      this.expire = now.toUTCString()
    }
  }
}
