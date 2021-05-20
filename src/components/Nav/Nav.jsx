import { Box, Button, Container, Paper, Switch, Typography, useTheme, } from '@material-ui/core'
import React from 'react'

import styles from './Nav.module.scss'

const Nav = ({ setDarkMode, darkMode }) => {

  const myTheme = useTheme()

  return (
    <header className={styles.wrap}>
      <Container maxWidth="lg">
        <Paper elevation={0}>
          <Box className={styles.box} display='flex' justifyContent="space-between" alignItems='center'>
            <Typography style={{ margin: '4px 0' }} variant="h5" gutterBottom>Lounge</Typography>
            <div>
              <Switch
                color='secondary'
                checked={darkMode}
                onChange={() => { setDarkMode(!darkMode) }}
              />
              <Button size='small' variant="contained" color="primary" style={{ marginRight: '10px' }}>Регистрация</Button>
              <Button size='small' variant="contained" color="secondary">Вход</Button>
            </div>
          </Box>
        </Paper>
      </Container>
    </header>
  )
}

export default Nav
