import React, { useEffect, useState } from 'react'
import Header from './Header'

interface AppState {
  message: string | null
  loading: boolean
  error: boolean
}

interface GraphQLResponse {
  data: {
    message: string
  }
}

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    message: null,
    loading: true,
    error: false,
  })

  useEffect(() => {
    const request = async () => {
      setState(prev => ({ ...prev, loading: true }))

      try {
        // 1. retrieve data via graphql
        const response = await fetch('/graphql', {
          method: 'post',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            variables: {},
            query: `query {
            message
          }`,
          }),
        })

        // 2. alternatively retrieve data directly from the api
        // const response = await fetch('/api',{
        //   headers: {
        //     'content-type': 'application/json',
        //   }
        // })

        const { data }: GraphQLResponse = await response.json()

        setState(prev => ({ ...prev, ...data, loading: false }))
      } catch (error) {
        setState(prev => ({ ...prev, error: true, loading: false }))
      }
    }

    request()
  }, [])

  if (state.loading) {
    return null
  }

  return <Header message={state.message} />
}

export default App 