import Layout from '../components/layout'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Georgia',
  },
});

export default function Blog({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <MuiThemeProvider theme={theme}>
      <Layout>
        <div className="blog-posts">
        <h1>Posts</h1>
        <div id="quote"><i>"Men learn while they teach" - Seneca</i></div>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <Link to={post.frontmatter.path} style={{ textDecoration: 'none' }}>
                <Paper id="card-blog">
                  <div style={{flex: 1}}>
                    <CardContent>
                      <Typography variant="h5" color="textPrimary">
                      {post.frontmatter.title}
                      </Typography>
                      <Typography variant="caption" color="textSecondary" paragraph>
                      {post.frontmatter.date}
                      </Typography>
                      <Typography variant="subtitle2">
                      {post.frontmatter.excerpt}
                      </Typography>
                    </CardContent>
                  </div>
                </Paper>
              </Link>
            )
          })}
        </div>
      </Layout>
    </MuiThemeProvider>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            excerpt
          }
        }
      }
    }
  }
`