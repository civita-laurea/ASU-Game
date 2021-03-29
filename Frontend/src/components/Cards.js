import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import tileData from './tileData';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
  return (
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">{`${Math.round(
              props.value,
          )}%`}</Typography>
        </Box>
      </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 'wrap',
    justifyContent: 'space-around',
    overflowY: 'scroll',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    // flexDirection: 'row',
    padding: 50,
  },
  card: {
    margin: 10,
    minWidth: 350,
    
  },
  titleBar: {
    background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'rgba(0, 0, 0, 0.9)',
    margin: 5,
  },
  bar: {
    width: '100%',
  },
  media: {
    height: 140,
  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
}));

export default function TitlebarGridList() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
<div className={classes.root}>
 
        <GridList className={classes.gridList} cellHeight={300} >
          {tileData.map((tile) => (
              <Card key={tile.img} className={classes.card}>
                <CardActionArea>
                  <CardMedia
                      className={classes.media}
                      image={tile.img}
                      title={tile.title}
                  />
                  <CardContent>
                    <Typography variant="h5" color="textPrimary" component="h5">{tile.title}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p" overflowY="scroll">
                      {tile.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <IconButton aria-label = "Like">
                    <ThumbUpIcon className={classes.icon} />
                  </IconButton>

                  <div className={classes.bar}>
                    <LinearProgressWithLabel value={progress} />
                  </div>
                </CardActions>
              </Card>




          ))}
        </GridList>
      </div>
  );
}
