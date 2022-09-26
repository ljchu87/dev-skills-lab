import { Router } from 'express'
import { skills } from '../data/skills-data.js'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

// GET - localhost:3000/skills
router.get('/', skillsCtrl.index)

// GET - localhost:3000/skills/new
router.get('/new', skillsCtrl.new)

export {
  router
}
