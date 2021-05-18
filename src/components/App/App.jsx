import { CssBaseline } from '@material-ui/core'
import React from 'react'
import Login from '../Login/Login'
import Nav from '../Nav/Nav'
import styles from './App.module.scss'

const App = () => {

  return (
    <div className={styles.app}>
      <CssBaseline />
      <Nav />
      <Login />
    </div>
  )
}
export default App
