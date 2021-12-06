/** @jsx jsx */
import { Link } from 'gatsby'
import { FaCalendar as DateIcon } from 'react-icons/fa'
import { Card, Flex, Heading, jsx, Text } from 'theme-ui'
import Tags from './tags'

const PostLink = ({ title, category, slug, date, excerpt, tags, language }) => (
  <Card sx={{ mx: 'auto', width: '100%', background: '#F2F2F2', borderRadius: '15px', padding: '10px' }}>
    <article sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}>
      <header>
        <Link to={slug}
              sx={{
                color: "primary",
            textDecoration: 'none'
          }}>
          <Heading as='h3'>{title}</Heading>
        </Link>
        <time sx={{ color: 'gray', fontSize: 'small' }}>
          <DateIcon sx={{ mr: 1 }} />
          {date}
        </time>
      </header>
      <section sx={{ pb: 2, flex: 1 }}>
        <Text color='text'>{excerpt}</Text>
      </section>
      <Flex sx={{ justifyContent: 'flex-end', px: 1 }}>
        <Tags tags={tags} language={language} />
      </Flex>
    </article>
  </Card>
)

export default PostLink
