import { createConnection, ConnectionOptions, Connection, getConnection } from 'typeorm'

class HelperTypeOrm {
  connection:Connection = null
  async connect (options:ConnectionOptions) {
    this.connection = await createConnection(options)
  }

  async disconnect () {
    await this.connection.close()
  }

  async clear () {
    const connection = await getConnection()
    const entities = connection.entityMetadatas

    entities.forEach(async (entity) => {
      const repository = connection.getRepository(entity.name)
      await repository.query(`DELETE FROM ${entity.tableName}`)
    })
  }
}
export const helperTypeOrm = new HelperTypeOrm()
