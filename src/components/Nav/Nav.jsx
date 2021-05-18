import { Box, Button, Container, Typography, withStyles } from '@material-ui/core'
import React from 'react'
import styles from './Nav.module.scss'
import grey from '@material-ui/core/colors/grey';

const Nav = () => {

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(grey[500]),
      backgroundColor: grey[500],
      '&:hover': {
        backgroundColor: grey[700],
      },
    },
  }))(Button);

  return (
    <header className={styles.wrap}>
      <Container maxWidth="lg">
          <Box className={styles.box} display='flex' justifyContent="space-between" alignItems='center'>
            <Typography style={{ margin: '4px 0 4px 10px', color: 'white' }} variant="h4" gutterBottom>Lounge</Typography>
            <div>
              <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>Регистрация</Button>
              <ColorButton variant="contained" style={{ marginRight: '10px', color: 'white' }}>Вход</ColorButton>
            </div>
          </Box>
      </Container>
    </header>
  )
}

export default Nav
