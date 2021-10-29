import { Router } from 'express'
const router = Router()

// router.get('/:id', skillsCtrl.show)
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Awesome Developer Skills' })
})

export { 
  router
}
