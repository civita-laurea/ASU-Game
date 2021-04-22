import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import MiniCardComponent from 'components/cards/MiniCardComponent';
import ChartComponent from './ChartComponent';
import ImportantScheduleComponent from './ImportantScheduleComponent';
import TasksComponent from './TasksComponent';

const useStyles = createUseStyles({
    cardsContainer: {
        marginRight: -30,
        marginTop: -30
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0
        }
    },
    miniCardContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none'
        }
    },
    radarChart: {
        marginTop: 30
    },
    lastRow: {
        marginTop: 30
    },
    importantSchedule: {
        marginRight: 30,
        '@media (max-width: 1024px)': {
            marginRight: 0
        }
    },
    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30
        }
    }
});

function DashboardComponent() {
    const classes = useStyles();
    return (
        <Column>
            <Row
                className={classes.cardsContainer}
                wrap
                flexGrow={1}
                horizontal='space-between'
                breakpoints={{ 768: 'column' }}
            >
                <Row
                    className={classes.cardRow}
                    wrap
                    flexGrow={1}
                    horizontal='space-between'
                    breakpoints={{ 384: 'column' }}
                >
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Unresolved'
                        value='3'
                    />
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Overdue'
                        value='None'
                    />
                </Row>
                <Row
                    className={classes.cardRow}
                    wrap
                    flexGrow={1}
                    horizontal='space-between'
                    breakpoints={{ 384: 'column' }}
                >
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Upcoming'
                        value='2'
                    />
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='On Hold'
                        value='1'
                    />
                </Row>
            </Row>
            <div className={classes.radarChart}>
                <ChartComponent />
            </div>
            <Row
                horizontal='space-between'
                className={classes.lastRow}
                breakpoints={{ 1024: 'column' }}
            >
                <ImportantScheduleComponent containerStyles={classes.importantSchedule} />
                <TasksComponent containerStyles={classes.tasks} />
            </Row>
            <div>
            </div>
        </Column>
    );
}

export default DashboardComponent;
