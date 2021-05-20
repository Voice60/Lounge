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
    <Container maxWidth="lg">
      <Box display='flex' flexDirection='column' alignItems="center">
        <Typography
          style={{ color: '#fff' }}
          variant='h2'>Вход</Typography>
        <Box
          bgcolor='background.paper'
          style={{ padding: '30px', margin: '30px 0', maxWidth: '380px' }}
          display='flex'
          flexDirection='column'
          alignItems="center">
          <SteamButton
            startIcon={<img src="https://img.icons8.com/wired/28/ffffff/steam.png" />}
            size='large'
            fullWidth
            style={{ marginBottom: '15px' }}
            variant="contained"
            color={theme.palette.text.secondary}>Войти через Steam
              </SteamButton>
          <Typography
            align='center'
            variant='body1'
            style={{ paddingBottom: '25px' }}>Чтобы принимать участие в аукционе,  необходимо авторизоваться.</Typography>
          <TextField
            variant="filled"
            size='large'
            fullWidth
            style={{ marginBottom: '10px' }}
            label='E-mail' />
          <TextField
            variant="filled"
            fullWidth
            style={{ marginBottom: '30px' }}
            type='Пароль'
            autoComplete="current-password"
            label="Password" />
          <Button
            size='large'
            fullWidth
            style={{ marginBottom: '25px' }}
            variant="contained"
            color="secondary">Войти
              </Button>
          <Link color="textSecondary" href="#">
            Забыли пароль?
          </Link>
        </Box>
      </Box>
    </Container>
  )
}

export default Login
