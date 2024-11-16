import { Router } from 'express'
import type { Database } from '@/database'
import { jsonRoute } from '@/utils/middleware'
import buildRespository from './repository'

export default (db: Database) => {
  const messages = buildRespository(db)
  const router = Router()

  router.get(
    '/',
    jsonRoute(async (req, res) => {
      const screenings = await messages.findAll()
      res.status(200)
      res.json(screenings)
    })
  )

  router.post(
    '/',
    jsonRoute(async (req, res) => {
      const data = req.body
      await messages.addScreening(data)
      res.status(200)
    })
  )

  return router
}
