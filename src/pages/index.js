import React from 'react'
import { BlogPost } from './blog'
import { ProjectCard } from './projects'
import Layout from '../components/layout'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby'

const activeProjects = [
  {
    title: "3D Graphics",
    image: "/static/images/graphics.gif",
    description: "Learning about computer graphics by implementing basic graphics algorithms",
    link: "https://github.com/manlaig/3d_graphics"
  },
  {
    title: "Graph Visualization",
    image: "/static/images/graph_algorithms.gif",
    description: "Implementing and visualizing popular graph algorithms in Java Swing",
    link: "https://github.com/manlaig/graph_algorithms"
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
          return (<ProjectCard showImage={true}
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