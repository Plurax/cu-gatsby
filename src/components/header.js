/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx, Text } from 'theme-ui'
import { localeLink, currentLanguage } from '../utils/localeLink'
import logo from '../img/CULogo.svg'
import SocialLinks from './social-links'
// const rootPath = `${__PATH_PREFIX__}/`

const linkStyles = {
  verticalAlign: "baseline",
  height: "40px",
  color: 'var(--theme-ui-colors-primary)',
  textDecoration: "none",
  px: 3, py: 1,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  fontWeight: "bold",
  padding: '9px 15px 5px 15px',
  borderRadius: '15px',
}

const activeStyles = {
  borderBottom: '3px solid var(--theme-ui-colors-primary)',
}

const Header = ({ title, lang }) => {

  return (
    <header sx={{
      '@media print': { display: 'none' },
      display: 'flex',
      py: 4,
      justifyContent: 'space-between',
      borderBottom: '1px solid grey',
      marginBottom: '10px',
    }}>
      <Link activeStyle={activeStyles} style={linkStyles} to={localeLink('')}>
        <Text><img src={logo} alt="Index" /></Text>
      </Link>
      <Link activeStyle={activeStyles} style={linkStyles} to={localeLink('/about')}>
        {(currentLanguage() === "en") ? "About" : "Über mich"}
      </Link>
      <Link activeStyle={activeStyles} style={linkStyles} to={localeLink('/imprint')}>
        {(currentLanguage() === "en") ? "Legal notice" : "Impressum"}
      </Link>
      <SocialLinks />
    </header>
  )
}

export default Header;
