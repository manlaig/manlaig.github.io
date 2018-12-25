import React from 'react'
import { BlogPost } from './blog'
import { ProjectCard } from './projects'
import Layout from '../components/layout'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby'

const activeProjects = [
  {
    title: "Holiday Wars",
    image: "/",
    description: "Real-time strategy game in Unity",
  },
]

export default function Blog({ data })
{
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <h1>Latest Post</h1>
      {posts
          .filter(post => posts.indexOf(post) < 1)
          .map(({ node: post }) => {
            return (
              <BlogPost path={post.frontmatter.path} title={post.frontmatter.title}
                        date={post.frontmatter.date} excerpt={post.frontmatter.excerpt} />
            )
          })}
      <Grid container justify="center">
        <Link to="/blog" style={{textDecoration:'none'}} title="Go to Blog">
          <Button variant="contained" size="large">
            More posts
          </Button>
        </Link>
      </Grid>
      <h1 style={{marginTop:20}}>Projects in progress</h1>
      <Grid container justify="center" spacing="40">
        {activeProjects.map(proj => { 
          return (<ProjectCard showImage={false}
                  title={proj.title} image={proj.image}
                  description={proj.description}
                  link={proj.link} more={proj.more}/>);
        })}
      </Grid>
      <Grid container justify="center">
        <Link to="/projects" style={{textDecoration:'none'}} title="Go to Projects">
          <Button variant="contained" size="large">
            Other projects
          </Button>
        </Link>
      </Grid>
    </Layout>
  );
}

export const pageQuery2 = graphql`
  query Blogs {
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