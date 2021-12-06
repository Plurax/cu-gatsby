/** @jsx jsx */
import { Link } from 'gatsby'
import { Badge, Flex, jsx, Text } from 'theme-ui'

const Tags = ({ tags,language }) => {
  return (
    <Flex sx={{ flexWrap: 'wrap', mx: -1, alignItems: 'center' }}>
      { tags ? tags.map(tag =>
        <Link key={`tag-${tag}`} to={`/${language}/tags/${tag}`}>
          <Badge variant='tag' sx={{ mx: 1, my: 1 }}>
            <Text>{ tag }</Text>            
          </Badge>
        </Link>
      ): "no tag" }
    </Flex>
  )
}

export default Tags
