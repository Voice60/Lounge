import { Button, createMuiTheme, CssBaseline, Switch, ThemeProvider } from '@material-ui/core'
import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

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
        primary: '#0C1223',
        secondary: '#0057be',
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
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <div className={styles.app}>
          <CssBaseline />
          <Nav setDarkMode={setDarkMode} darkMode={darkMode} />
          <div className={`paddingTop ${styles.content}`}>
            <Route path='/login' render={() => <Login />} />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}
export default App
