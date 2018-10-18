import Layout from '../components/layout'
import React, { Component } from 'react';
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';

export class BlogPost extends Component
{
  render()
  {
    return (
    <Link to={this.props.path} style={{ textDecoration: 'none' }}>
      <Paper id="card-blog">
        <div style={{flex: 1}}>
          <CardContent>
            <Typography variant="h5" color="textPrimary">
            {this.props.title}
            </Typography>
            <Typography variant="caption" color="textSecondary" paragraph>
            {this.props.date}
            </Typography>
            <Typography variant="subtitle2">
            {this.props.excerpt}
            </Typography>
          </CardContent>
        </div>
      </Paper>
    </Link>
    );
  }
}

export default function Blog({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
      <Layout>
        <div className="blog-posts">
        <h1>Posts</h1>
        <div id="quote"><i>"Men learn while they teach" - Seneca</i></div>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <BlogPost path={post.frontmatter.path} title={post.frontmatter.title}
                        date={post.frontmatter.date} excerpt={post.frontmatter.excerpt} />
            )
          })}
        </div>
      </Layout>
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