/** @jsx jsx */
import { Link } from 'gatsby'
import { Box, Container, Divider, Flex, jsx, Text } from 'theme-ui'
import HTML from './html'
import Layout from './layout'
import PostMeta from './post-meta'
import PostShare from './post-share'
import PostTitle from './post-title'
import { useEffect } from 'react'
import { FaTags as TagsIcon } from 'react-icons/fa'
import SEO from './seo'
import Tags from './tags'
import highlightHelper from '../utils/highlighthelper'
import { currentLanguage} from '../utils/localeLink'

export default ({ data }) => {
  console.log("Post: ", data.orgPost);
  useEffect(() => {
    highlightHelper.highlightCode()
  })
  
  const post = data.orgPost

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.excerpt}
        imageSource={post.image?.childImageSharp?.fluid.src}
        keywords={[post.category, ...(post.tags || [])]} />
      <Container variant='content'>
        <main sx={{ flex: 1, pb: 4, mx: 'auto' }}>
          <article>
            <header sx={{ pb: 1 }}>
              <PostTitle>{post.title}</PostTitle>
              <Flex sx={{ alignItems: 'center', mt: -4, mb: 3 }}>
                <Box sx={{ pr: 3 }}>
                  <PostMeta post={post}/>
                </Box>
              </Flex>
            </header>
            <section>
              <HTML raw={post.html} />
            </section>
          </article>
        </main>
        <Box>
          <Flex sx={{ alignItems: 'center', justifyContent: 'flex-end' }}>
            <TagsIcon sx={{ mr: 2 }}/>
            <Tags tags={post.tags} language={post.language}/>
          </Flex>
          <PostShare post={post}/>
          <Divider />
        </Box>

      </Container>
    </Layout>
  )
}
