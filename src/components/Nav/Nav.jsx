import { Box, Button, Container, Paper, Typography, useTheme, } from '@material-ui/core'
import React from 'react'

import styles from './Nav.module.scss'

const Nav = () => {

  const myTheme = useTheme()
  console.log(myTheme.palette)

  return (
    <header className={styles.wrap}>
      <Container maxWidth="lg">
        <Paper elevation={0}>
          <Box className={styles.box} display='flex' justifyContent="space-between" alignItems='center'>
            <Typography style={{ margin: '4px 0' }} variant="h5" gutterBottom>Lounge</Typography>
            <div>
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
