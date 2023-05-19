import {ApolloClient, InMemoryCache} from '@apollo/client'

let client: ApolloClient<any>

export const getApolloClient = () => {
  client =
    client ??
    new ApolloClient({
      uri: process.env.API_URL,
      cache: new InMemoryCache(),
      headers: {
        Authorization: `apikey ${process.env.STEPZEN_API_KEY}`,
      },
    })
  return client
}
