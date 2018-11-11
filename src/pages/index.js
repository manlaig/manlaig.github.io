import React from 'react'
import { BlogPost } from './blog'
import { ProjectCard } from './projects'
import Layout from '../components/layout'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby'

const activeProjects = [
  {
    title: "Pong AI",
    image: "/static/images/pong-bots.gif",
    description: "Building a neural network to play Pong at an expert level",
    link: "https://github.com/manlaig/pong_bots",
    more: "https://manlaig.github.io/pong_bots"
  },
  {
    title: "Quiz Helper",
    image: "/",
    description: "A web scraper that finds answers to quiz questions",
    link: "https://github.com/manlaig/quiz_answer_finder",
    more: "https://github.com/manlaig/quiz_answer_finder"
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
      <h1 style={{marginTop:30}}>Projects in progress</h1>
      <Grid container justify="center" spacing="40">
        {activeProjects.map(proj => { 
          return (<ProjectCard showImage={false}
                  title={proj.title} image={proj.image}
                  description={proj.description}
                  link={proj.link} more={proj.more}/>);
        })}
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