/** @jsx jsx */
import { ReactChild } from 'react'
;import { Container, jsx, Themed } from 'theme-ui'
import Footer from './footer'
import Header from './header'


const Layout = ({ children }) => {

  return (
    <Themed.root>
      <Container sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        maxWidth: 900,
      }}
      >
        <Header/>
        <div sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto' }}>
          {children}
        </div>
        <Footer/>
      </Container>
    </Themed.root>
  )
}

export default Layout
