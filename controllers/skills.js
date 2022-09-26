// Import the skills data
import { skills } from '../data/skills-data'

function index(req, res) {
  res.render('skills/index', {
    skills: skills
  })
}

export {
  index
}