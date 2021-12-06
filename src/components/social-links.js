/** @jsx jsx */
import {
  FaEnvelope as EmailIcon, FaGithub as GithubIcon, FaGlobe as WebsiteIcon, FaTwitter as TwitterIcon, FaLinkedin as LinkedInIcon
} from 'react-icons/fa'
import { Flex, IconButton, jsx, Text } from 'theme-ui'
import { useSiteMetadata } from '../hooks/siteMetaData'
import { Link } from 'gatsby'
import { languageString, localeLink, currentLanguage, languageLink } from '../utils/localeLink'

const SocialLinks = () => {
    const { social } = useSiteMetadata()

  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'twitter': return <TwitterIcon size='1.5em' />
      case 'email': return <EmailIcon size='1.5em' />
      case 'github': return <GithubIcon size='1.5em' />
      case 'website': return <WebsiteIcon size='1.5em' />
      case 'linkedin': return <LinkedInIcon size='1.5em' />
    default: return <Text>{name}</Text>
    }
  }

    return (
        <Flex>
        { social.map(({ name, url }) =>
            <a key={`social-${name}`} href={url}>
                <IconButton sx={{
                    mx: 1,
                  '&:hover': { bg: 'highlight' },
                  color: 'var(--theme-ui-colors-primary)',
                }}>
                    { getIcon(name) }
                </IconButton>
            </a>
        ) }
          <Link sx={{textDecoration: 'none'}} to={languageLink()}>
                <IconButton sx={{
                  '&:hover': { bg: 'highlight' },
                  fontWeight: 'bold',
                  color: 'var(--theme-ui-colors-primary)',
                  textDecoration: 'none',
                  letterSpacing: '0.1em',
                  px: 3, py: 1,
                }}>
                    {languageString()}
                </IconButton>
            </Link>
        </Flex>
    )
}

export default SocialLinks
