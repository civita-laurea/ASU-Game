import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import CommunityComponent from './CommunityComponent';

const useStyles = createUseStyles({
    cardsContainer: {
        marginRight: -30,
        marginTop: -30
    },
    communityComponent: {
        marginTop: 30
    },
    lastRow: {
        marginTop: 30
    },
});

function CommunityPageComponent() {
    const classes = useStyles();
    return (
        <Column>
            <div className={classes.CommunityComponent}>
                <CommunityComponent />
            </div>
        </Column>
    );
}

export default CommunityPageComponent;
