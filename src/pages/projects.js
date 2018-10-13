import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/layout'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 345,
    marginBottom: 40
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
  },
});

function ProjectCard(props) 
{
    const { classes } = props;
    return (
        <Paper className={classes.paper} id="card-projects">
                <CardMedia
                component="img"
                alt="Test image"
                className={classes.media}
                height="140"
                image="../images/test.png"
                title="Test image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Title
                    </Typography>
                    <Typography component="p">
                        This is test descripti onvsfvfv;alkvh;fv klfgj;lfghglargherglk shgla;ehgrger gaegr
                    </Typography>
                </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                Code
                </Button>
                <Button size="small" color="primary">
                <SvgIcon {...props}>
                    <path d="M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z" />
                </SvgIcon>
                </Button>
            </CardActions>
        </Paper>
    );
}

function FormRow(props)
{
  const { classes } = props;

  return (
    <Grid item container justify="center" spacing="40">
      <Grid item>
        <ProjectCard classes={classes}/>
      </Grid>
      <Grid item>
        <ProjectCard classes={classes}/>
      </Grid>
    </Grid>
  );
}

function NestedGrid(props) {
  const { classes } = props;

  return (
    <Layout className={classes.root}>
      <h1>Projects</h1>
      <Grid container>
        <FormRow classes={classes} />
        <FormRow classes={classes} />
        <FormRow classes={classes} />
      </Grid>
    </Layout>
  );
}

NestedGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedGrid);
