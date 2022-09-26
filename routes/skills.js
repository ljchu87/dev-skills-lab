import { Router } from 'express'
import { skills } from '../data/skills-data.js'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

router.get('/', skillsCtrl.index)

export {
  router
}
