import { Box, Button, Container, Link, Paper, Typography } from '@material-ui/core'
import React from 'react'
import AssignmentIcon from '@material-ui/icons/Assignment'

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
                ИП Слободянюк Данил Андреевич <br />
          ИНН: 2531022200449<br />
          ОГРНИП: 319272400058541<br />

          680054, Хабаровский край,<br />
          г. Хабаровск, ул. Штормовая, д. 10
              </Typography>
            </Box>

            <Box display='flex' flexDirection='column'>
              <Typography variant='body1' color='textSecondary' gutterBottom>Соглашения</Typography>
              <span style={{ display: 'flex', alignItems: 'center' }}><AssignmentIcon /><Link href='#' variant="caption" >Политика безопасности</Link></span>
              <span style={{ display: 'flex', alignItems: 'center' }}><AssignmentIcon /><Link href='#' variant="caption" >Публичная оферта</Link></span>
              <span style={{ display: 'flex', alignItems: 'center' }}><AssignmentIcon /><Link href='#' variant="caption" >Пользовательское соглашение</Link></span>
              <span style={{ display: 'flex', alignItems: 'center' }}><AssignmentIcon /><Link href='#' variant="caption" >Политика конфиденциальности</Link></span>
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
