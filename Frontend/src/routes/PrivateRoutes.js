import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';

const DashboardComponent = lazy(() => import('./dashboard'));
const CommunityComponent = lazy(() => import('./communityPage'))
const QuizComponent = lazy(() => import('./quizPage'))

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={SLUGS.dashboard} component={DashboardComponent} />
                <Route exact path={SLUGS.profile} render={() => <div>profile</div>} />
                <Route exact path={SLUGS.ratingAndComments} render={() => <div>Rating and Comments</div>} />
                <Route exact path={SLUGS.courses} render={() => <div>courses list</div>} />
                <Route exact path={SLUGS.coursesWork} render={() => <div>courses assignments</div>} />
                <Route exact path={SLUGS.coursesData} render={() => <div>courses data overview</div>} />
                <Route exact path={SLUGS.quizzes} component={QuizComponent} />
                <Route exact path={SLUGS.community} component={CommunityComponent} />
                <Route exact path={SLUGS.settings} render={() => <div>settings</div>} />
                <Redirect to={SLUGS.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
