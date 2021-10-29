import { Router } from 'express'
import * as skillsCtrl from "../controllers/skills.js"
const router = Router()


router.get('/', skillsCtrl.index)

router.get("/new", skillsCtrl.new)

router.get("/:id", skillsCtrl.show)

router.post("/", skillsCtrl.create)

router.delete("/:id", skillsCtrl.delete)

app.get('/skills', function (req, res) {
	todoDb.find({}, function (error, skills) {
		res.render('skills/index', {
			skills: skills,
			error: error,
		})
	})
})


export {
  router
}
