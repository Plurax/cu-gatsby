/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx, Text, useColorMode } from 'theme-ui'
import { languageString, localeLink, currentLanguage, languageLink } from '../utils/localeLink'
import logo from '../img/CULogo.svg'
import SocialLinks from './social-links'
// const rootPath = `${__PATH_PREFIX__}/`

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
            <Link to={localeLink('')}>
                <Text sx={{
                    px: 3, py: 1,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                }}><img src={logo}/></Text>
            </Link>
            <Link to={localeLink('/about')}>
                <Text sx={{
                    px: 3, py: 1,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                }}>{(currentLanguage() === "en") ? "About" : "Über mich"}</Text>
            </Link>
            <Link to={localeLink('/imprint')}>
                <Text sx={{
                    px: 3, py: 1,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                }}>{(currentLanguage() === "en") ? "Legal notice" : "Impressum"}</Text>
            </Link>
            <SocialLinks/>
        </header>
    )
}

export default Header;
