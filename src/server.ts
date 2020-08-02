import { app } from './app'
import { configPostgresTypeOrm } from './repositories/implementations/config/configPostgresTypeOrm'
import { helperTypeOrm } from './repositories/implementations/helpers/helperTypeOrm'

const port = process.env.PORT || 3333

helperTypeOrm.connect(configPostgresTypeOrm)
  .then(async () => {
    app.listen(port, () => console.log(`Servidor rodando http://localhost:${port}/`))
  }
  )
