/** @jsx jsx */
import { ReactChild } from 'react'
;import { Container, jsx, Styled } from 'theme-ui'
import footer from './footer'
import Header from './header'


const Layout = ({ children }) => {

  return (
    <Styled.root>
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
        <footer/>
      </Container>
    </Styled.root>
  )
}

export default Layout
