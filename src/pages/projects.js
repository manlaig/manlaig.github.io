import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/layout'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';

export const projects = [
  {
    title: "AR Draw",
    image: "/static/images/ar-draw.gif",
    description: "Persistent Augmented Reality drawing app",
    link: "https://github.com/manlaig/ar_draw",
    more: "https://manlaig.github.io/AR_draw/"
  },
  {
    title: "Multiplayer Chess",
    image: "/static/images/chess-app.png",
    description: "Real-time chess and messaging app on the web",
    link: "https://github.com/manlaig/LiveChess",
    more: "http://chess-manlaig.herokuapp.com/"
  },
  {
    title: "Pong AI",
    image: "/static/images/pong-bots.gif",
    description: "A Deep Neural Network that plays Pong",
    link: "https://github.com/manlaig/pong_bots",
    more: "https://manlaig.github.io/pong_bots"
  },
  {
    title: "Survival Rush",
    image: "/static/images/survival-rush.gif",
    description: "A fun survival game for iOS and Android",
    link: "https://github.com/manlaig/survival_rush",
    more: "https://play.google.com/store/apps/details?id=com.manlaig.SurvivalRush"
  },
  {
    title: "Weather App",
    image: "/static/images/weather-app.png",
    description: "Displaying current weather data of cities",
    link: "https://github.com/manlaig/weather_forecast",
    more: "http://weather-manlaig.herokuapp.com"
  },
  {
    title: "Sort Visualizer",
    image: "/static/images/merge_sort.gif",
    description: "Visualizing sorting algorithms",
    link: "https://github.com/manlaig/sort_visualizer",
    more: "http://manlai.me/sort_visualizer/"
  },
];

export class ProjectCard extends Component
{
  render()
  {
    return (
      <Grid item>
        <a href={this.props.more} target="_blank" rel="noopener noreferrer"
           title="Learn More" style={{textDecoration:"none"}}>
          <Paper style={{ textAlign: 'center',
            maxWidth: 340,
            marginBottom: 20}} id="card-projects">
              {this.props.showImage && <CardMedia style = {{ height: 0,
                paddingTop: '56%',
                objectFit: 'cover',
                marginBottom: 0,
                paddingBottom: 0,}}
                image={this.props.image}/>}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5">
                        {this.props.title}
                    </Typography>
                    <Typography component="p">
                        {this.props.description}
                    </Typography>
                </CardContent>
              <CardActions>
                  <Button size="small" color="primary" href={this.props.more} target="_blank">
                    Learn More
                  </Button>
                  <IconButton size="small" color="primary" href={this.props.link} target="_blank">
                    <SvgIcon>
                      <path d="M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z" />
                    </SvgIcon>
                  </IconButton>
              </CardActions>
          </Paper>
        </a>
      </Grid>
    );
  }
}

export default class GridProjects extends Component
{
  render()
  {
    return (
      <Layout>
        <h1>Projects</h1>
        <div id="quote"><i>"What I cannot create, I do not understand." - Richard Feynman</i></div>
        <Grid container justify="center" spacing="40">
        {projects.map(proj => { 
          return (<ProjectCard showImage={true}
                  title={proj.title} image={proj.image}
                  description={proj.description}
                  link={proj.link} more={proj.more}/>);
          })}
        </Grid>
      </Layout>
    );
  }
}
