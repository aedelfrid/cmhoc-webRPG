import { useState } from 'react'
import { ApolloProvider } from '@apollo/client';
import { client } from '../utils/apolloClient';
import Header from './assets/header/header'
import Login from './assets/logIn'

import './App.css'

function App() {

  return (
    <ApolloProvider client={client}>
      <Header/>
      <Login/>
    </ApolloProvider>
  )
}

export default App
