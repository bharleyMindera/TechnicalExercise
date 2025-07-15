import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'

import express, { json as _json } from 'express'
import cors from 'cors'
import gql from 'graphql-tag'

const typeDefs = gql`
  type Query {
    message: String!
  }
`

const resolvers = {
  Query: {
    message: async (): Promise<string> => {
      const response = await fetch('http://localhost:3002/api')
      const json = await response.json()
      return json.data.message
    },
  },
}

const app = express()

const server = new ApolloServer({ typeDefs, resolvers })

server.start().then(() => {
  app.use('/graphql', cors(), _json(), expressMiddleware(server))

  app.listen(process.env.PORT, () => {
    console.log(`listening on localhost:${process.env.PORT}`)
  })
}) 