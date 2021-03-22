import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker,
  Line
} from "react-simple-maps";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import GridList from '@material-ui/core/GridList';
import CardContent from '@material-ui/core/CardContent';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { makeStyles } from '@material-ui/core/styles';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


  const markers = [
    {
      markerOffset: -15,
      name: "Buenos Aires",
      coordinates: [-58.3816, -34.6037]
    },
    { markerOffset: -15, name: "Paris", coordinates: [2.3522, 48.8566] },
    { markerOffset: 25, name: "New York City", coordinates: [-74.006, 40.7128] }
  ];

  const useStyles = makeStyles((theme) => ({
    root: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
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
      margin: 0,
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

const MapChart = () => {
  const classes = useStyles();
  return (
    <GridList className={classes.gridList} cellHeight={300} >
    <Card>
        <CardContent>
    <ComposableMap
    projectionConfig={{
        scale: 155,
        rotation: [-11, 0, 0],
      }}
      width={800}
      height={400}
      padding={10}
      style={{ width: "100%", height: "auto" }} 
    >
      <Graticule stroke="#DDD" />
      <Geographies
        geography={geoUrl}
        fill="#D6D6DA"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
        }
      </Geographies>
      <Line
        from={[2.3522, 48.8566]}
        to={[-74.006, 40.7128]}
        stroke="#FF5533"
        strokeWidth={4}
        strokeLinecap="round"
      />
      <Line
        from={[2.3522, 48.8566]}
        to={[-58.3816, -34.6037]}
        stroke="#FF5533"
        strokeWidth={4}
        strokeLinecap="round"
      />
            {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={5} fill="#F00" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
    </CardContent>
    </Card>
    <Card>
    <CardContent>
    <h3>Pandemicator (The Terminator of Pandemic)</h3>
    <p>You're the agent we've chosen among many to send back to the Past!</p>

<p>They could not flatten the curves and lost a lot. They had the knowledge but didn't do it. It's hard to find out why they didn't save themselves. The least we can do is trying to correct it.
Get the knowledge and training and act like it to save humanity from this dark pandemic.</p>


<p>The system will be in contact with you through this old method that people used at the time, Emails. provide us with one so when you're finished, we can send you the reports</p>
    <CardActions>
      <IconButton aria-label = "Like">
          <NavigateNextIcon className={classes.icon} />
      </IconButton>
    </CardActions>
    </CardContent>
    </Card>
    </GridList>
  );
};

export default MapChart;
