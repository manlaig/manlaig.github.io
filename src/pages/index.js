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
    title: "Snow Wars",
    image: "/static/images/snow_wars.gif",
    description: "Real-time strategy game in Unity. Inspired by Starcraft",
    link: "https://github.com/manlaig/snow_wars",
    more: "https://github.com/manlaig/snow_wars"
  },
  {
    title: "Survival Rush",
    image: "/static/images/survival-rush.gif",
    description: "A fun survival game for iOS and Android. Built in Unity",
    link: "https://github.com/manlaig/survival_rush",
    more: "https://play.google.com/store/apps/details?id=com.manlaig.SurvivalRush",
    moreTitle: "Play Store",
  },
  {
    title: "Game Networking API",
    image: "/static/images/pong_2p.gif",
    description: "Simple UDP networking API for Unity",
    link: "https://github.com/manlaig/basic_multiplayer_unity",
    more: "https://manlai.me/basic_multiplayer_unity/"
  },
  {
    title: "3D Graphics",
    image: "/static/images/graphics.gif",
    description: "Very simple rendering engine",
    link: "https://github.com/manlaig/3d_graphics",
    more: "https://manlai.me/3d_graphics/"
  },
  {
    title: "AR Draw",
    image: "/static/images/ar-draw.gif",
    description: "Persistent Augmented Reality drawing app in Unity",
    link: "https://github.com/manlaig/ar_draw",
    more: "https://manlaig.github.io/AR_draw/"
  },
  {
    title: "RTS Object Placement",
    image: "/static/images/object_placement.gif",
    description: "Dynamic grid-based building placement in Unity",
    link: "https://github.com/manlaig/object_placement",
    more: "https://manlai.me/building-placement",
    moreTitle: "Read Post",
  },
  {
    title: "Multiplayer Chess",
    image: "/static/images/chess-app.png",
    description: "Real-time chess and messaging app",
    link: "https://github.com/manlaig/LiveChess",
    more: "http://chess-manlaig.herokuapp.com/",
    moreTitle: "demo",
  },
  {
    title: "Weather App",
    image: "/static/images/weather-app.gif",
    description: "Displaying real-time weather with React",
    link: "https://github.com/manlaig/weather_forecast",
    more: "http://weather-manlaig.herokuapp.com",
    moreTitle: "demo",
  },
  {
    title: "Pong AI",
    image: "/static/images/pong-bots.gif",
    description: "Teaching neural networks to play Pong",
    link: "https://github.com/manlaig/pong_bots",
    more: "https://manlaig.github.io/pong_bots"
  },
  {
    title: "Sort Visualizer",
    image: "/static/images/merge_sort.gif",
    description: "Visualizing sorting algorithms in Swing",
    link: "https://github.com/manlaig/sort_visualizer",
    more: "http://manlai.me/sort_visualizer/"
  },
  {
    title: "Maze",
    image: "/static/images/maze.gif",
    description: "Visualizing maze generation and solving algorithms in Swing",
    link: "https://github.com/manlaig/maze",
    more: "https://manlai.me/maze/"
  },
  {
    title: "Graph Visualization",
    image: "/static/images/graph_algorithms.gif",
    description: "Implementing and visualizing popular graph algorithms in Java Swing",
    link: "https://github.com/manlaig/graph_algorithms",
    more: "https://manlai.me/graph_algorithms/"
  },
];

export class ProjectCard extends Component
{
  render()
  {
    return (
      <Grid item>
        <a href={this.props.more} target="_blank" rel="noopener noreferrer"
           style={{textDecoration:"none"}}>
          <Paper style={{ textAlign: 'center',
            width: 340,
            marginBottom: 60}} id="card-projects">
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
                    {this.props.moreTitle}
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
        <h1 style={{textAlign:"center"}}>Projects</h1>
        <div id="quote"><i>"What I cannot create, I do not understand." - Richard Feynman</i></div>
        
        <Grid container justify="center" spacing={1} direction="row">
          <ProjectCard showImage={true}
                  title={projects[0].title} image={projects[0].image}
                  description={projects[0].description}
                  link={projects[0].link} more={projects[0].more}
                  moreTitle={projects[0].moreTitle == null ? "Learn more" : projects[0].moreTitle}/>
          <ProjectCard showImage={true}
                  title={projects[1].title} image={projects[1].image}
                  description={projects[1].description}
                  link={projects[1].link} more={projects[1].more}
                  moreTitle={projects[1].moreTitle == null ? "Learn more" : projects[1].moreTitle}/>
        </Grid>
        <Grid container justify="center" spacing={1} direction="row">
          <ProjectCard showImage={true}
                  title={projects[2].title} image={projects[2].image}
                  description={projects[2].description}
                  link={projects[2].link} more={projects[2].more}
                  moreTitle={projects[2].moreTitle == null ? "Learn more" : projects[2].moreTitle}/>
          <ProjectCard showImage={true}
                  title={projects[3].title} image={projects[3].image}
                  description={projects[3].description}
                  link={projects[3].link} more={projects[3].more}
                  moreTitle={projects[3].moreTitle == null ? "Learn more" : projects[3].moreTitle}/>
        </Grid>
        <Grid container justify="center" spacing={1} direction="row">
          <ProjectCard showImage={true}
                  title={projects[4].title} image={projects[4].image}
                  description={projects[4].description}
                  link={projects[4].link} more={projects[4].more}
                  moreTitle={projects[4].moreTitle == null ? "Learn more" : projects[4].moreTitle}/>
          <ProjectCard showImage={true}
                  title={projects[5].title} image={projects[5].image}
                  description={projects[5].description}
                  link={projects[5].link} more={projects[5].more}
                  moreTitle={projects[5].moreTitle == null ? "Learn more" : projects[5].moreTitle}/>
        </Grid>
        <Grid container justify="center" spacing={1} direction="row">
          <ProjectCard showImage={true}
                  title={projects[6].title} image={projects[6].image}
                  description={projects[6].description}
                  link={projects[6].link} more={projects[6].more}
                  moreTitle={projects[6].moreTitle == null ? "Learn more" : projects[6].moreTitle}/>
          <ProjectCard showImage={true}
                  title={projects[7].title} image={projects[7].image}
                  description={projects[7].description}
                  link={projects[7].link} more={projects[7].more}
                  moreTitle={projects[7].moreTitle == null ? "Learn more" : projects[7].moreTitle}/>
        </Grid>
        <Grid container justify="center" spacing={1} direction="row">
          <ProjectCard showImage={true}
                  title={projects[8].title} image={projects[8].image}
                  description={projects[8].description}
                  link={projects[8].link} more={projects[8].more}
                  moreTitle={projects[8].moreTitle == null ? "Learn more" : projects[8].moreTitle}/>
          <ProjectCard showImage={true}
                  title={projects[9].title} image={projects[9].image}
                  description={projects[9].description}
                  link={projects[9].link} more={projects[9].more}
                  moreTitle={projects[9].moreTitle == null ? "Learn more" : projects[9].moreTitle}/>
        </Grid>
        <Grid container justify="center" spacing={1} direction="row">
          <ProjectCard showImage={true}
                  title={projects[10].title} image={projects[10].image}
                  description={projects[10].description}
                  link={projects[10].link} more={projects[10].more}
                  moreTitle={projects[10].moreTitle == null ? "Learn more" : projects[10].moreTitle}/>
          <ProjectCard showImage={true}
                  title={projects[11].title} image={projects[11].image}
                  description={projects[11].description}
                  link={projects[11].link} more={projects[11].more}
                  moreTitle={projects[11].moreTitle == null ? "Learn more" : projects[11].moreTitle}/>
        </Grid>
      </Layout>
    );
  }
}
