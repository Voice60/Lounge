import { Box, Breadcrumbs, Button, Container, Divider, Link, Paper, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { darken, useTheme, withStyles } from '@material-ui/core/styles'

import styles from './Login.module.scss'
import { grey, red } from '@material-ui/core/colors'

const Login = () => {
  let theme = useTheme()
  console.log(theme)
  let color = grey[700]

  const SteamButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(color),
      backgroundColor: color,
      '&:hover': {
        backgroundColor: darken(color, 0.2),
      },
    },
  }))(Button);

  return (
    <div className={styles.bgImage}>
      <div className={`paddingTop ${styles.wrap}`}>
        <Container maxWidth="lg">
          <Box display='flex' flexDirection='column' alignItems="center">
            <Typography style={{color: '#fff', padding: '30px 0'}} variant='h2'>Вход</Typography>
            <Box bgcolor='background.paper' style={{ padding: '30px', maxWidth: '450px' }} display='flex' flexDirection='column' alignItems="center">
              <SteamButton startIcon={<img src="https://img.icons8.com/wired/28/ffffff/steam.png"/>} size='large' fullWidth style={{ marginBottom: '15px' }} variant="contained" color={theme.palette.text.secondary}>
                Войти через Steam
              </SteamButton>
              <Typography align='center' variant='body1' style={{paddingBottom: '25px'}}>Чтобы принимать участие в аукционе,  необходимо авторизоваться.</Typography>
              <TextField variant="filled" size='large' fullWidth style={{ marginBottom: '10px' }} label='E-mail' />
              <TextField variant="filled" fullWidth style={{ marginBottom: '30px' }} type='Пароль' autoComplete="current-password" label="Password" />
              <Button size='large' fullWidth style={{ marginBottom: '15px' }} variant="contained" color="secondary">
                Войти
              </Button>
              <Link color="textSecondary" href="#">
                Забыли пароль?
              </Link>
              <Divider style={{width: '100%', margin: '10px'}} variant='middle' />
              <p style={{textAlign: 'center'}}>
                <Typography variant='caption1'>
                  Ещё нет на Lounge.ru?
                </Typography>
                &nbsp;
                <Link color="textSecondary" href="#">
                  Зарегистрироваться
                </Link>
              </p>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  )
}

export default Login
