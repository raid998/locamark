import express, { Express, Request } from 'express'
import dotenv from 'dotenv'

const app: Express = express()
dotenv.config()
app.get('/', (req: Request, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`)
})
