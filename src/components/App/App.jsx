import { Button, createMuiTheme, CssBaseline, Switch, ThemeProvider } from '@material-ui/core'
import React, { useState } from 'react'
import Footer from '../Footer/Footer'

import Login from '../Login/Login'
import Nav from '../Nav/Nav'
import styles from './App.module.scss'

const App = () => {

  const lightTheme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#0057be',
      },
      secondary: {
        main: '#ccddf2',
        light: '#e6edf5',
        dark: '#b5d3f5',
        contrastText: '#0057be',
      },
      text: {
        primary: '#0057be',
        secondary: '#0C1223',
      },
      background: {
        paper: '#fff',
      }
    },
  })
  
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark', 
      primary: {
        main: '#fff',
      },
      secondary: {
        main: '#585c70',
      },
      warning: { 
        main: '#ED2E45'
      },
      background: {
        paper: '#2E334C'
      },
      text: {
        primary: '#fff',
        secondary: '#ed2e45'
      }
    },
  })

  const [darkMode, setDarkMode] = useState(true)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div className={styles.app}>
        <CssBaseline />
        <Nav />
        <Switch
        color='secondary'
          checked={darkMode}
          onChange={() => { setDarkMode(!darkMode) }}
        />
        <Login />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
export default App
