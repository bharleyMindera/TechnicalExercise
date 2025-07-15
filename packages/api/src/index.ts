import express, { Request, Response } from 'express'

const server = express()
  .get('/api', (req: Request, res: Response) => {
    res.json({ data: { message: 'Mindera Hello World' } })
  })
  .listen(process.env.PORT, () => {
    console.log('api listening', server.address())
  }) 