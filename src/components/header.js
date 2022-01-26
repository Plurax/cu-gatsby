/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx, Text } from 'theme-ui'
import { localeLink, currentLanguage } from '../utils/localeLink'
import logo from '../img/CULogo.svg'
import SocialLinks from './social-links'
import styled from 'styled-components'
// const rootPath = `${__PATH_PREFIX__}/`

const StyledLink = styled(Link)`
  vertical-align: baseline;
  height: 40px;
  color: var(--theme-ui-colors-primary);
  text-decoration: none;
  px: 3;
  py: 1;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: bold;
  padding: 9px 15px 5px 15px;

&:hover {
  border-bottom: 3px solid var(--theme-ui-colors-primary);
}

&:active {
border-color: red;
}
`;

const activeStyles = {
  borderBottom: '3px solid var(--theme-ui-colors-secondary)',
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
      <StyledLink activeStyle={activeStyles} to={localeLink('')}>
        <Text><img src={logo} alt="Index" /></Text>
      </StyledLink>
      <StyledLink activeStyle={activeStyles} to={localeLink('/about')}>
        {(currentLanguage() === "en") ? "About" : "Über mich"}
      </StyledLink>
      <StyledLink activeStyle={activeStyles} to={localeLink('/imprint')}>
        {(currentLanguage() === "en") ? "Legal notice" : "Impressum"}
      </StyledLink>
      <SocialLinks />
    </header>
  )
}

export default Header;
