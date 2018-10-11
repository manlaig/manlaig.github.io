/*import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Blog = () => (
    <Layout>
        <Link to="/">Back</Link>
    </Layout>
)

export default Blog
*/

import Layout from '../components/layout'
import React from 'react';
import { Link } from 'gatsby'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  layout: {
    width: 'auto',
  }, 
  card: {
    display: 'flex',
    marginBottom: 25,
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  },
  cardDetails: {
    flex: 1,
  },
});

const featuredPosts = [
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
  ];

function Blog(props) {
  const { classes } = props;

  return (
    <Layout>
    <React.Fragment>
      <div className={classes.layout}>
        <main>
            {featuredPosts.map(post => (
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography variant="headline" color="textPrimary">
                        {post.title}
                      </Typography>
                      <Typography variant="caption" color="textSecondary" paragraph>
                        {post.date}
                      </Typography>
                      <Typography variant="subtitle2" paragraph>
                        {post.description}
                      </Typography>
                      <Button variant="outlined" size="small" className={classes.button}>
                        <Link to="/"><span style={{textDecoration:'none'}}>Read</span></Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
            ))}
        </main>
      </div>
    </React.Fragment>
    </Layout>
  );
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);