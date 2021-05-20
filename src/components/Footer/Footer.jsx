import { Box, Button, Container, Link, Paper, Typography } from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <Paper style={{ padding: '40px 0' }} elevation={0}>
        <Container maxWidth="md">
          <Typography variant='h4' color='textSecondary' style={{ marginTop: '5px' }} gutterBottom>Lounge.ru</Typography>
          <Box style={{ padding: '5px 15px;' }} display='flex' justifyContent="space-between">
            <Box display='flex' flexDirection='column'>
              <Typography variant="body1" color='textSecondary' gutterBottom >Информация</Typography>
              <Typography variant="caption" >
                ИП Жмышенко Валерий Альбертович <br />
          ИНН: 1488228542730<br />
          ОГРНИП: 319272400058541<br />

          680054, Самарская область,<br />
          г. Самара, ул. Пожилого кролика, д. 54
              </Typography>
            </Box>

            <Box display='flex' flexDirection='column'>
              <Typography variant='body1' color='textSecondary' gutterBottom>Соглашения</Typography>
              <Box display='flex' alignItems='center'><AssignmentIcon /><Link href='#' variant="caption" >Политика безопасности</Link></Box>
              <Box display='flex' alignItems='center'><AssignmentIcon /><Link href='#' variant="caption" >Публичная оферта</Link></Box>
              <Box display='flex' alignItems='center'><AssignmentIcon /><Link href='#' variant="caption" >Пользовательское соглашение</Link></Box>
              <Box display='flex' alignItems='center'><AssignmentIcon /><Link href='#' variant="caption" >Политика конфиденциальности</Link></Box>
            </Box>
            <Box display='flex' flexDirection='column'>
              <Typography variant='body1' color='textSecondary' gutterBottom>Связь</Typography>
              <Button variant='contained' color='secondary' size='small'>Написать в поддержку</Button>
            </Box>
          </Box>
        </Container>
      </Paper>
    </footer>
  )
}
export default Footer
