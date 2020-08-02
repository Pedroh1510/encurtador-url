import { Router } from 'express'

import { createUrlController } from './useCases/CreateUrl'
import { getUrlController } from './useCases/GetUrl'

const router = Router()

router.get('/:smallUrl', (request, response) => {
  return getUrlController.handle(request, response)
})
router.post('', (request, response) => {
  return createUrlController.handle(request, response)
})

export { router }
