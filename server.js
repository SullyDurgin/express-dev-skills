import createError from 'http-errors'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import methodOverride from "method-override"
import { router as indexRouter } from './routes/index.js'
import { router as skillsRouter } from './routes/skills.js'
const app = express()


app.set(
  'views',
  path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
)
app.set('view engine', 'ejs')

app.use(function(req, res, next) {
  req.time = new Date().toLocaleTimeString()
  next()
})
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)
app.use(methodOverride("_method"))
app.use('/', indexRouter)
app.use('/skills', skillsRouter)
app.use(function (req, res, next) {
  next(createError(404))
})
app.use(function (err, req, res, next) {
 
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}


  res.status(err.status || 500)
  res.render('error')
})

export {
  app
}
