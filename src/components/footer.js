/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { useSiteMetadata } from '../hooks/siteMetaData'

export default () => {
    const { author } = useSiteMetadata()
  return (
    <footer sx={{ py: 5, textAlign: 'center', color: 'gray' }}>
      <Box>
        All materials &copy; { `${(new Date()).getFullYear()}` }, { author }.
      </Box>
      <Box>
        Powered by <a sx={{textDecoration:"none",color:"primary"}} href="https://orgmode.org">org-mode</a>, using <a sx={{textDecoration:"none",color:"primary"}} href="https://orga.js.org">orgajs</a> and <a sx={{textDecoration:"none",color:"primary"}} href="https://www.gatsbyjs.com">Gatsby</a>.
      </Box>
    </footer>

  )
}
