import React from 'react';
import { Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import CardComponent from 'components/cards/CardComponent';

const useStyles = createUseStyles((theme) => ({
    itemTitle: {
        ...theme.typography.itemTitle,
        color: theme.color.veryDarkGrayishBlue
    },
    itemValue: {
        color: theme.color.grayishBlue2
    }
}));

function ScheduleComponent({ containerStyles }) {
    const theme = useTheme();
    const classes = useStyles({ theme });

    function renderStat(title, value) {
        return (
            <Row horizontal='space-between' vertical='center'>
                <span className={classes.itemTitle}>{title}</span>
                <span className={[classes.itemTitle, classes.itemValue].join(' ')}>{value}</span>
            </Row>
        );
    }

    return (
        <CardComponent
            containerStyles={containerStyles}
            title='Important Schedule'
            link='View all'
            subtitle='Group:'
            subtitleTwo='Upcoming'
            items={[
                renderStat('Meeting with math students', 'Mar 01'),
                renderStat('Math course midterm', 'Mar 15'),
                renderStat('Physics course midterm', 'Mar 20'),
                renderStat('National Holiday', 'Apr 10')
            ]}
        />
    );
}

export default ScheduleComponent;
