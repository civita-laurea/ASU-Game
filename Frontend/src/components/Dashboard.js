import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker,
  Line
} from "react-simple-maps";
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import GridList from '@material-ui/core/GridList';
import CardContent from '@material-ui/core/CardContent';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
import DashData from './DashData';
import PropTypes from 'prop-types';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


  const markers = [
    {
      markerOffset: -15,
      name: "Buenos Aires",
      coordinates: [-58.3816, -34.6037]
    },
    { markerOffset: -15, name: "Paris", coordinates: [2.3522, 48.8566] },
    { markerOffset: 25, name: "New York City", coordinates: [-74.006, 40.7128] },
    { markerOffset: -15, name: "Lima", coordinates: [-77.0428, -12.0464] },
    { markerOffset: -15, name: "Johannesburg", coordinates: [28.04363, -26.20227]}
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

function DrawLine(props){
  const check1 = props.value1;
  const indices = props.indices;
  const newData = DashData.slice(0, check1);
  let keyValue = 0;
  console.log(`indices: ${JSON.stringify(indices, null, 2)}`);
  return (
      <>
        { newData.map(function(item) {
          return (<Line from={[item.fromX, item.fromY]}
                        to={[item.toX, item.toY]}
                        stroke= {item.stroke}
                        strokeWidth={4}
                        strokeLinecap="round"
                        key={keyValue++}
              />
          );
        })
        }
        { indices.map((idx) => { console.log(`idx = ${idx}`); return <Line
            from={[DashData[idx].fromX, DashData[idx].fromY]}
            to={[-77.0428, -12.0464]}
            stroke= "#000000"
            strokeWidth={4}
            strokeLinecap="round"
            key={keyValue++}
        />; }) }
      </>
  );
}


DrawLine.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value1: PropTypes.number.isRequired,
  value2: PropTypes.number.isRequired,
};


const MapChart = () => {
  const classes = useStyles();
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(1);
  const [reward, setReward] = useState(0);
  const [wrongAnsIndices, setWrongAnsIndices] = useState([]);
  const CorrectClick = () => {
    setCount1(count1 + 1)
    setCount2(1)
    setReward(reward + 1)
  }
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
      <DrawLine value1 = {count1} indices = {wrongAnsIndices}/>
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
      <p>{DashData[count1].question}</p>
    <CardActions>
      <IconButton onClick={CorrectClick} aria-label = "Correct">
          <CheckIcon className={classes.icon} />
      </IconButton>
      <IconButton onClick={() => setWrongAnsIndices(wrongAnsIndices=> [...wrongAnsIndices, count1])} aria-label = "Incorrect">
          <ClearIcon className={classes.icon} />
      </IconButton>
    </CardActions>
    </CardContent>
    </Card>
    </GridList>
  );
};

export default MapChart;
